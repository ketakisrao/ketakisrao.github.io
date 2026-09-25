export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  excerpt: string;
  tags: string[];
}

export const JOURNAL_POSTS_DATA: BlogPostMeta[] = [
  {
    slug: 'ai-accelerating-path-to-staff-engineer',
    title: 'Becoming a Staff Engineer in the Age of AI: 5 Unlearnings',
    category: 'Staff Engineering & AI',
    date: 'September 24, 2026',
    readTime: '5 min read',
    summary: 'How shifting toward staff engineering is less about adopting new tools and more about trading task execution for system judgment, leverage, and durable outcomes.',
    excerpt: 'How shifting toward staff engineering is less about adopting new tools and more about trading task execution for system judgment, leverage, and durable outcomes.',
    tags: ['Staff Engineering', 'AI Mindset', 'Career Growth', 'Engineering Culture']
  },
  {
    slug: 'making-ai-agents-production-ready',
    title: 'How to make AI agents production-ready: a grounding playbook',
    category: 'AI Engineering & DX',
    date: 'July 8, 2026',
    readTime: '6 min read',
    summary: 'A tactical blueprint using tiered fuzzy matching, log probabilities, and citation verification to eliminate hallucinations in production AI agents.',
    excerpt: 'A tactical blueprint using tiered fuzzy matching, log probabilities, and citation verification to eliminate hallucinations in production AI agents.',
    tags: ['AI Engineering', 'Grounding', 'DX & Enablement']
  },
  {
    slug: 'evals-not-an-afterthought',
    title: 'Evals are not an afterthought: how to test LLM agents that actually work in production',
    category: 'AI Evals & Metrics',
    date: 'July 8, 2026',
    readTime: '5 min read',
    summary: 'Why robust evaluation pipelines must combine deterministic offline checks with live telemetry to catch silent agent regressions early.',
    excerpt: 'Why robust evaluation pipelines must combine deterministic offline checks with live telemetry to catch silent agent regressions early.',
    tags: ['AI Evals', 'Observability', 'Metrics']
  },
  {
    slug: 'securing-the-prompt-beginner-guide',
    title: 'Securing the prompt: a beginner\'s guide to LLM and agent security',
    category: 'Developer Education',
    date: 'July 8, 2026',
    readTime: '4 min read',
    summary: 'A practical security guide on defending autonomous LLM agents against prompt injections, data leakage, and untrusted execution boundaries.',
    excerpt: 'A practical guide on defending autonomous LLM agents against prompt injections, data leakage, and untrusted execution boundaries.',
    tags: ['Developer Education', 'Prompt Security', 'InfoSec']
  }
];
