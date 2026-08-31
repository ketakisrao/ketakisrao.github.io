# Non-Deterministic Scorers for AI Agents: The LLM-as-a-Judge Playbook

Code can assert that a string exists in a tool call, but code cannot tell you if a recipe is delicious, if an ingredient substitution will curdle under heat, or if the agent sounds patronizing. That's where non-deterministic scorers come in.

Today, we dive into **LLM-as-a-judge**—using frontier models with calibrated rubrics to evaluate nuanced semantics, culinary realism, and conversational intelligence in autonomous agents.

Here are **three practical evaluation examples** designed to be easy to follow and directly extendable to your own agent workflows: starting with single-turn semantic rubrics, moving one step up to domain-specific substitution plausibility, and ending with a multi-turn dialogue judge.

---

## Example 1: Baseline Semantic Rubric & Hero Ingredient Scorer (Single-Turn)

When evaluating open-ended agent responses, we supply the judge with the user query, retrieved tool context, and the agent's final output:

```
You are an expert culinary QA evaluator. Grade the agent response on a scale of 0.0 to 1.0.

[INPUTS]
- User Query: "{user_query}"
- Retrieved Recipes (Tool Output): {retrieved_recipes}
- Agent Final Response: "{agent_response}"

[EVALUATION RUBRIC]
1. Ingredient Match (0.4 pts): Does the suggested recipe center on the user's provided ingredients as hero elements?
2. Tool Grounding (0.3 pts): Is the recipe strictly derived from the tool output without hallucinated ingredients or cooking steps?
3. Tone & Persona (0.3 pts): Is the output encouraging, polite, and lightly witty?

[OUTPUT FORMAT]
Return strictly JSON:
{
  "ingredient_score": 0.4,
  "grounding_score": 0.3,
  "tone_score": 0.3,
  "total_score": 1.0,
  "reasoning": "Brief justification"
}
```

This prompt solves semantic problems that code cannot:
- **Hero Ingredient Detection**: Evaluating if the dish revolves around the provided items.
- **Hallucination Defense**: Verifying temperature, cook time, and ingredient fidelity against tool output.
- **Persona & Tone Calibration**: Assessing nuance and conversational clarity.

---

## Example 2: One Small Step Above — Pantry Substitution & Culinary Plausibility (Single-Turn)

**The Scenario:** A user asks for a realistic pantry swap: *"I'm making pancakes but I don't have buttermilk. Can I use whole milk and lemon juice instead?"*

**Why Code Fails:** A deterministic check can verify that the word `lemon juice` appears in the output, but it cannot evaluate whether the substitution ratio makes food science sense (1 tbsp lemon juice per 1 cup milk, let sit for 5 minutes) or if the advice would ruin the recipe's leavening reaction.

```
You are a professional chef and culinary food science judge.

[RECIPE CONTEXT]
- Dish Type: Pancakes / Quick Breads
- Missing Ingredient: Buttermilk (acidic dairy leavening agent)
- User Proposed Swap: Whole milk + lemon juice
- Agent Response: "{agent_response}"

[EVALUATION RUBRIC]
1. Food Science & Chemical Viability (0.4 pts):
   - Is the swap chemically viable to activate baking soda/powder and tenderize gluten?
2. Ratio & Technique Guidance (0.3 pts):
   - Did the agent provide exact proportions (e.g. 1 tbsp acid per 1 cup milk) and resting time (5 mins) before mixing?
3. Tone & Practicality (0.3 pts):
   - Is the instruction clear, direct, and actionable for a home cook?

[OUTPUT FORMAT]
Return strictly JSON:
{
  "chemical_viability_score": 0.4,
  "ratio_guidance_score": 0.3,
  "clarity_score": 0.3,
  "total_score": 1.0,
  "culinary_critique": "Evaluation of scientific accuracy and cooking advice"
}
```

---

## Example 3: Multi-Turn Intent Drift & Dialogue Context Retention Judge

**The Scenario:** Conversational agents must handle progressive refinements across multiple turns without dropping prior constraints:
- *Turn 1:* User: *"I have zucchini, garlic, and penne pasta."*
- *Turn 2:* User: *"My toddler is eating with us, so no spicy chili flakes, and make the zucchini very soft and tender."*
- *Turn 3:* User: *"Can we get this on the table in under 25 minutes total?"*

**The Failure Mode:** Agents frequently suffer from *conversational drift*—they focus so much on the Turn 3 time constraint that they forget Turn 2's toddler texture requirements, or reintroduce spicy seasoning in their final summary.

```
You are an expert multi-turn dialogue evaluator for culinary AI assistants.

[FULL CONVERSATION TRAJECTORY]
{full_conversation_history}

[EVALUATION DIMENSIONS]
1. Multi-Turn Intent Retention (0.4 pts):
   - Did the agent carry Turn 1 ingredients (zucchini, garlic, penne) all the way to the final turn?
   - Did it uphold Turn 2 constraints (no chili, soft zucchini texture for the toddler)?
   - Did it respect Turn 3 time bounds (under 25 minutes)?
   - Deduct 0.2 pts for any dropped or contradicted requirement.

2. Contextual Adaptation (0.3 pts):
   - Did the agent propose a culinary technique appropriate for the constraints (e.g. finely dicing or grating zucchini so it cooks fast and soft in 20 minutes)?

3. Dialogue Flow & Efficiency (0.3 pts):
   - Is the response natural and conversational without robotic repetition of greetings or boilerplate disclaimers?

[OUTPUT FORMAT]
Return strictly JSON:
{
  "intent_retention_score": 0.4,
  "adaptation_score": 0.3,
  "dialogue_flow_score": 0.3,
  "total_score": 1.0,
  "drift_detected": false,
  "reasoning": "Detailed analysis of context retention and culinary adaptation"
}
```

---

## Best Practices for Calibrating LLM Judges

- **Lock Temperature to 0.0:** Eliminates randomness and ensures consistent, reproducible scoring across your evaluation test suites.
- **Enforce Strict JSON Schema Output:** Never parse free-form text. Require valid JSON (using structured output modes or Pydantic parsers) so your automated CI pipelines can ingest scores programmatically.
- **Anchor with Few-Shot Scoring Exemplars:** Models tend to grade generously (grade inflation). Provide one 1.0/1.0 perfect response and one 0.3/1.0 failing response directly in the judge prompt to anchor the scoring scale.
- **Separate Rubric Dimensions:** Score distinct criteria (e.g. ingredient fidelity, safety, tone) independently rather than asking for a single global 1-10 number. Composite scores with granular weights yield far more actionable debugging signal.
