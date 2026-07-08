# Evals are not an afterthought: how to test LLM agents that actually work in production

Most teams treat evaluation as something you do after the agent is built. That's backwards. By the time you're debugging silent failures in production, you've already lost. Evals should be part of the design from day one — and they should run in two places: offline before you ship, and online once you do.

Here's a practical breakdown of how to build both.

---

## Start with a solid dataset

Everything depends on the quality of your evaluation data. The gold standard is curated production examples — real inputs with verified correct outputs. But if you're early and real data is scarce, AI-generated synthetic datasets are a legitimate starting point. Generate examples that cover edge cases, not just the happy path.

One trap to avoid: **don't blindly treat user input as ground truth.** Users make mistakes. They upload the wrong document, mistype values, or submit incomplete data. Ground truth needs to be verified, not assumed. Someone has to own that curation step — it's not something you can skip.

One more thing: if you're working with real user data, get infosec involved early. Sensitive data may require review before it can be used for evals, and certain models may be restricted from seeing it entirely. Find out before you've built a pipeline around data you can't actually use.

---

## Offline evals: catch problems before they ship

Offline evals run against your golden dataset before any code reaches production. Think of them as your test suite for agent behavior.

**Two types of scorers:**

- **Custom script-based scorers** — deterministic checks you write yourself. Is the output valid JSON? Does the TIN match the expected format? Does the extracted state appear in a known list of state codes? Fast, cheap, exact.
- **LLM-as-a-judge** — use a model to evaluate outputs that are hard to check programmatically. Did the summary capture the key points? Is the response factually consistent with the source? Useful for subjective or open-ended outputs where a regex won't cut it.

Run both. Use deterministic checks wherever possible, and reach for LLM-as-a-judge only when you need it.

---

## Online evals: what production actually looks like

Offline evals tell you the agent works. Online evals tell you it's *still* working — on real inputs, in real conditions, right now.

These are the checks running in your live pipeline on every request. They need to be fast and they need to be meaningful.

**What to check:**

- **Output validity.** Agents often return JSON embedded as a string inside JSON. Parse it, then parse it again. Have explicit validation in place for every output format you depend on.
- **Grounding checks.** For every extracted value, verify it appears in the source document — via OCR match, regex, or both. This is your primary hallucination defense.
- **Field-level sanity checks.** A TIN should be nine digits. A state should be a two-letter code. A date shouldn't be in the future. These checks are cheap and catch a surprising number of real failures.

When something fails an online check, don't just log it and move on. Use a model to summarize and categorize the failure. A structured, searchable failure log is the difference between debugging in minutes and debugging in days.

---

## The pipeline problems nobody warns you about

Even a well-evaluated agent will fail if the data going in — or coming out — isn't handled carefully.

**OCR is messier than you think.** OCR output isn't always sorted or accurate. A TIN of `8845` can come back as `8485`. Characters get transposed, lines get reordered, columns bleed together. Build this assumption into your thresholds and your grounding checks. Don't expect clean input.

**Send only what the model needs.** Large documents are expensive and slow to process. Identify and extract the relevant pages before sending anything to the model. A 40-page contract where you only need page 2 should never land in a prompt as 40 pages.

**Post-processing is not optional.** Models return values in whatever format makes sense to them. Your systems require a specific format. Those two things are often different. "California" and "CA" are the same to a human and completely different to a database field. Plan for a formatting layer between model output and system input — and build it before you need it.

---

## Guardrails: your last line of defense

Evals tell you when things go wrong. Guardrails try to prevent them.

**In-prompt guardrails** set explicit rules the model must follow: return an empty object if the document isn't the expected type, never infer values not present in the source, flag fields you're uncertain about rather than guessing.

**Grounding** is the runtime complement: every prediction gets checked against the source before it's trusted. A value isn't valid because the model said it — it's valid because it exists in the document.

Neither guardrail is sufficient alone. Use both.

---

## The short version

| Layer | What it does |
|---|---|
| Golden dataset | Defines what "correct" looks like |
| Offline scorers | Catches regressions before shipping |
| Online scorers | Detects failures in live production |
| Pre-processing | Keeps inputs clean and scoped |
| Post-processing | Makes outputs system-compatible |
| Guardrails | Prevents the worst failures at runtime |

Evals are how you go from "it works in demos" to "it works for real users." Start early, run them continuously, and treat a failed eval as signal — not noise.

