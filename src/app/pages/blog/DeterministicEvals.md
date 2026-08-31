# Deterministic Scorers for AI Agents: The Code-First Evaluation Playbook

Before you spend time and money running LLM-as-a-judge on every prompt iteration, start with code. Deterministic scorers are fast, free of inference costs, 100% reproducible, and should form the foundational bedrock of your agent CI/CD pipeline.

When evaluating autonomous AI agents—like a culinary recipe assistant that takes pantry ingredients and fetches viable recipes—the first line of defense is programmatic validation. If an agent fails to pass the correct arguments to a database tool, no amount of prompt polish will save the user experience.

Here are **three progressive evaluation examples**—starting from basic single-turn parameter verification, moving one step up to categorical and numerical bounds, and culminating in a multi-turn constraint persistence evaluation.

---

## Example 1: Baseline Tool Call Parameter Match (Single-Turn)

In its simplest form, a deterministic scorer inspects the structured payload emitted by an LLM function/tool call:

```python
def eval_deterministic(user_ingredients: list[str], tool_call: dict) -> bool:
    """Validate that the agent correctly parameterized the recipe search tool."""
    params = tool_call.get("args", {})

    has_ingredients = all(ing.lower() in str(params.get("query", "")).lower()
                          for ing in user_ingredients)
    has_high_rating = params.get("min_rating", 0.0) >= 4.0

    return has_ingredients and has_high_rating
```

This single-turn check verifies:
- **Ingredient Inclusion:** Did the agent translate the user's raw prompt into a structured query containing all mandatory items?
- **Constraint Compliance:** Did the agent enforce the default quality filter (e.g. `min_rating >= 4.0`)?

---

## Example 2: One Small Step Above — Dietary Filters & Numerical Bounds (Single-Turn)

**The Scenario:** *"I have eggs and tomatoes. Find me a vegetarian recipe ready in under 20 minutes."*

**What we test:** In addition to checking the raw text query, we verify that the agent mapped categorical user intents into explicit tool schema parameters (`dietary_preference == "vegetarian"`) and enforced a numerical threshold (`max_cook_time_mins <= 20`).

```python
def eval_recipe_filters(user_ingredients: list[str], max_time_limit: int, tool_call: dict) -> bool:
    """Validate both ingredient search, dietary tags, and numerical time constraints."""
    params = tool_call.get("args", {})

    # 1. Check positive ingredients presence
    query_str = str(params.get("query", "")).lower()
    has_ingredients = all(ing.lower() in query_str for ing in user_ingredients)

    # 2. Check categorical dietary parameter mapping
    is_vegetarian = params.get("dietary_preference") == "vegetarian"

    # 3. Check numerical boundary validation
    cook_time = params.get("max_cook_time_mins", 999)
    within_time_limit = 0 < cook_time <= max_time_limit

    return has_ingredients and is_vegetarian and within_time_limit
```

---

## Example 3: Multi-Turn Constraint Persistence & Negation Tracking

**The Scenario:**
- *Turn 1:* User: *"I have chicken breast and broccoli."* -> Agent calls search tool.
- *Turn 2:* User: *"Actually, make sure it's completely dairy-free and under 30 minutes to cook."*

**The Failure Mode:** Recency displacement—where the agent adds the 30-minute limit for Turn 2 but drops the Turn 1 ingredients or forgets to populate negative exclusions (milk, cream, butter, cheese).

```python
def eval_multiturn_constraint_persistence(trajectory: list[dict]) -> bool:
    """
    Validate that constraints from Turn 1 are preserved in Turn 2,
    and new negative/time filters are strictly applied across turns.
    """
    turn_1_tool = trajectory[0].get("tool_call", {}).get("args", {})
    turn_2_tool = trajectory[1].get("tool_call", {}).get("args", {})

    # 1. Base ingredients from Turn 1 must persist in Turn 2 query
    t2_query = turn_2_tool.get("query", "").lower()
    base_persisted = "chicken" in t2_query and "broccoli" in t2_query

    # 2. Turn 2 dairy exclusion filter must be explicitly populated
    dairy_exclusions = [x.lower() for x in turn_2_tool.get("exclude_ingredients", [])]
    dairy_excluded = (
        turn_2_tool.get("dietary_tag") == "dairy_free" or
        all(item in dairy_exclusions for item in ["milk", "cheese", "cream", "butter"])
    )

    # 3. Maximum cook time constraint enforced
    max_time = turn_2_tool.get("max_cook_time_mins", 999)
    time_enforced = max_time <= 30

    return base_persisted and dairy_excluded and time_enforced
```

---

## Summary

Deterministic evals are the unit tests of AI engineering. Use them for fast validation in pull request gates, and complement them with LLM-as-a-judge for semantic evaluation.
