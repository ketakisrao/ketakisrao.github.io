# How to make AI agents production-ready: a grounding playbook

LLMs are remarkably good at sounding right. They're not always *being* right. And in production, that gap will cost you.

If your AI agent is extracting structured data — names, IDs, dates, amounts — "usually correct" isn't good enough. A wrong tax ID isn't a typo. It's a compliance problem. A confidently wrong value that passes undetected is worse than an obvious failure.

The solution is **grounding**: verifying every prediction against something real and external before trusting it. Not asking the model how confident it feels. Checking.

Here are three techniques to do it. Pick based on how much latency you can afford.

---

## 1. The tiered three-way match *(most accurate, slowest)*

**The idea:** A model extracting data from a document shouldn't be inventing answers — the answer is already on the page. So check that it's there.

Run your document through an OCR service to get raw extracted text. That becomes your ground truth. For every field the model predicts, search for that value in the OCR output using fuzzy matching.

Set thresholds per field based on how much error you can tolerate:
- A person's name: ~80% match is fine (OCR mangles punctuation)
- A TIN: ~90% — tax IDs are unforgiving
- A two-letter state code: 100% — no slack on short strings

If the prediction shows up in the document text above the threshold → grounded. Move on.

For anything that doesn't pass, escalate to a heavier model from the same family and repeat. Accept the field if the two models agree *or* if the heavier model's answer also appears in the OCR.

Still no match? Flag it for human review. Don't silently pass it downstream.

**Best for:** Asynchronous pipelines where accuracy matters more than speed.

**Watch out for:** Complexity and latency. Two model tiers, OCR, per-field thresholds, fuzzy matching — it adds up. Keep costs down by only calling the heavier model when the first pass fails.

---

## 2. Log-probability grounding *(fast, good for real-time)*

**The idea:** When a model generates text, it already knows how confident it was — token by token. Ask for those numbers.

Log probabilities are a byproduct of text generation, so requesting them adds almost no latency. A log prob near zero means high confidence. More negative means the model was guessing.

Parse out the tokens for each predicted value, average their log probs, and compare against a threshold. Below the threshold → flag it.

Say your agent extracts a TIN. TINs are random — the model has nothing to fall back on from training. If it's guessing, confidence drops. You catch it.

**Best for:** Real-time agents where you can't afford a second model call.

**Watch out for:** Overconfident errors. If a model has seen "Smith" a million times and the document says "SMYTH," it'll predict "Smith" at high confidence. Log probs won't save you — the model is sure, just wrong. This technique has blind spots on common natural-language patterns.

---

## 3. Citation-based grounding *(simplest to build)*

**The idea:** Ask the model to show its work. In the prompt, require it to return a source snippet alongside every value it predicts. Then check: does the predicted value appear in the snippet it cited?

```
{
 "name": "Acme Corp",
 "name_citation": "payable to Acme Corp, attention"
}
```

If "Acme Corp" is in the citation → grounded. If not → flag it.

There's almost nothing to build beyond the prompt instruction and a string match. Easy to implement, easy to debug — you can inspect any field and see exactly what source the model claimed.

**Best for:** Teams that need a quick, readable grounding layer, or when log probs aren't available from your model provider.

**Watch out for:** Contextual mismatch. The model can cite a real snippet and still answer the wrong question. Ask for an invoice date, it returns October 4 — which genuinely appears in the document — but that's the due date, not the invoice date. The value is real. The citation is real. The answer is wrong. Citation grounding checks presence, not meaning.

---

## The rule that applies to all three

**Never ask the model to rate its own confidence.**

It sounds useful: "On a scale of 0–100, how confident are you?" Don't do it. Models will fabricate a number. They have no reliable introspective sense of when they're wrong — and a plausible-sounding confidence score is exactly the kind of thing they're good at generating.

Every technique above works because it checks predictions against something *external and deterministic*: raw document text, token-level probabilities emitted during generation, or a verifiable citation. That's what makes it grounding. Self-reported scores are not grounding — they're just more model output.

---

## Which one should you use?

| | Tiered match | Log probs | Citations |
|---|---|---|---|
| Latency | High | Low | Low |
| Accuracy | Highest | Medium | Medium |
| Build effort | High | Medium | Low |
| Blind spot | Address-level OCR noise | Confident wrong answers | Contextual mismatch |

Start with log probs or citations to get something shipped. Move toward the tiered match as accuracy requirements grow. The grounding strategy is independent of the model — which means you can swap models freely as long as your evals are in place.

Build the evals first. Measure instead of guessing.

