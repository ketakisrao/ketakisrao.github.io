export interface SkillItem {
  id: string;
  name: string;
  category?: 'ai' | 'advocacy' | 'languages' | 'cloud';
  highlight?: boolean; // Spotlight nexus node
  connections: string[];
}

/**
 * Single source of truth for the Connected Skills Graph.
 * To add a new skill:
 *  1. Add an entry with a unique `id`, `name`, and `connections` array listing the IDs of related skills.
 *  2. You can optionally add its id to the other skills' connections array (or let the graph treat connections as bidirectional).
 */
export const SKILLS_GRAPH_DATA: SkillItem[] = [
  // --- AI & Agentic Systems ---
  {
    id: 'llm-evals',
    name: 'Continuous LLM Evaluations',
    category: 'ai',
    highlight: true,
    connections: ['grounding', 'guardrails', 'hallucination', 'python', 'gcp', 'technical-storytelling']
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent Workflows',
    category: 'ai',
    connections: ['mcp', 'llm-evals', 'python', 'typescript', 'websockets']
  },
  {
    id: 'grounding',
    name: 'Real-World Data Grounding',
    category: 'ai',
    connections: ['rag-vector', 'hallucination', 'llm-evals', 'sql']
  },
  {
    id: 'hallucination',
    name: 'Hallucination Mitigation',
    category: 'ai',
    connections: ['llm-evals', 'guardrails', 'grounding', 'hci']
  },
  {
    id: 'rag-vector',
    name: 'RAG & Vector Search',
    category: 'ai',
    connections: ['grounding', 'mcp', 'sql', 'python']
  },
  {
    id: 'mcp',
    name: 'Model Context Protocol (MCP)',
    category: 'ai',
    connections: ['multi-agent', 'api-design', 'typescript', 'rag-vector']
  },
  {
    id: 'guardrails',
    name: 'OWASP LLM Guardrails',
    category: 'ai',
    connections: ['hallucination', 'api-design', 'llm-evals']
  },

  // --- Technical Advocacy & Design ---
  {
    id: 'interactive-demos',
    name: 'Interactive Demos',
    category: 'advocacy',
    connections: ['react', 'hci', 'technical-storytelling', 'websockets']
  },
  {
    id: 'technical-storytelling',
    name: 'Technical Storytelling & RFCs',
    category: 'advocacy',
    connections: ['cross-functional', 'api-design', 'interactive-demos', 'llm-evals']
  },
  {
    id: 'cross-functional',
    name: 'Cross-Functional Collaboration',
    category: 'advocacy',
    connections: ['developer-empathy', 'technical-storytelling', 'gcp']
  },
  {
    id: 'developer-empathy',
    name: 'Developer Empathy',
    category: 'advocacy',
    connections: ['cross-functional', 'api-design', 'hci', 'typescript']
  },
  {
    id: 'api-design',
    name: 'API Design',
    category: 'advocacy',
    connections: ['typescript', 'graphql', 'technical-storytelling', 'mcp', 'developer-empathy']
  },
  {
    id: 'hci',
    name: 'Human-Computer Interaction (HCI)',
    category: 'advocacy',
    connections: ['react', 'interactive-demos', 'developer-empathy', 'hallucination']
  },

  // --- Languages & Frameworks ---
  {
    id: 'typescript',
    name: 'TypeScript & Node.js',
    category: 'languages',
    connections: ['react', 'api-design', 'graphql', 'mcp', 'websockets']
  },
  {
    id: 'react',
    name: 'React',
    category: 'languages',
    connections: ['typescript', 'interactive-demos', 'hci', 'graphql']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    connections: ['llm-evals', 'rag-vector', 'multi-agent', 'gcp']
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'languages',
    connections: ['typescript', 'api-design', 'react', 'aws']
  },
  {
    id: 'sql',
    name: 'SQL & Relational Data',
    category: 'languages',
    connections: ['rag-vector', 'gcp', 'grounding', 'aws']
  },

  // --- Cloud & Platforms ---
  {
    id: 'gcp',
    name: 'GCP (Vertex AI & BigQuery)',
    category: 'cloud',
    connections: ['llm-evals', 'python', 'sql', 'docker-telemetry']
  },
  {
    id: 'aws',
    name: 'AWS Serverless',
    category: 'cloud',
    connections: ['graphql', 'sql', 'docker-telemetry']
  },
  {
    id: 'websockets',
    name: 'Real-Time WebSockets',
    category: 'cloud',
    connections: ['interactive-demos', 'multi-agent', 'typescript']
  },
  {
    id: 'docker-telemetry',
    name: 'Docker & Observability',
    category: 'cloud',
    connections: ['gcp', 'aws', 'llm-evals', 'developer-empathy']
  }
];
