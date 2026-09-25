export interface SkillDetail {
  id: string;
  name: string;
  tag: string;
  technologies: string[];
  impact: string;
  highlight?: boolean;
}

export interface SkillPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: 'primary' | 'secondary' | 'tertiary' | 'sage';
  badge: string;
  skills: SkillDetail[];
}

export const SKILL_PILLARS_DATA: SkillPillar[] = [
  {
    id: 'ai-agentic',
    title: 'AI & Agentic Systems',
    subtitle: 'Engineering enterprise autonomous agents, continuous evaluation pipelines, and hallucination guardrails.',
    icon: 'neurology',
    accent: 'primary',
    badge: 'Core Focus',
    skills: [
      {
        id: 'continuous-evals',
        name: 'Continuous LLM Evaluations',
        tag: 'Reliability & Benchmarks',
        technologies: ['Evaluation Pipelines', 'Golden Datasets', 'Model Guardrails', 'LLM Grounding'],
        impact: 'Built continuous LLM evaluation pipelines and golden datasets to test agent reliability, mitigate hallucinations, and ensure secure, consistent model behavior across enterprise workloads.',
        highlight: true
      },
      {
        id: 'enterprise-w9-agent',
        name: 'Enterprise W9 Agent',
        tag: 'Production Agents',
        technologies: ['Agent harness + scaling', 'Context + Prompt Engineering'],
        impact: 'Orchestrated and scaled an enterprise-grade W9 AI agent, achieving 98% accuracy and automating high-fidelity data processing for 30K+ monthly vendors.'
      },
      {
        id: 'figma-mcp-genai',
        name: 'Figma Connect & MCP GenAI',
        tag: 'Agent Tooling',
        technologies: ['Figma Connect', 'Model Context Protocol (MCP)', 'Live Demos'],
        impact: 'Integrated design systems into Copilot(GenAI) via Figma Connect and MCP to support production ready UI code generation, leading to an increased developer velocity. Championed its usage across the company.'
      },
      {
        id: 'agent-security',
        name: 'Autonomous Agent Security',
        tag: 'Information Security',
        technologies: ['Prompt injection', 'PII Protection', 'Least Privilege Access'],
        impact: 'Integrated enterprise security and guardrails for LLM gateway, preventing PII and sensitive information leakage, least-privilege IAM, prompt injection defense, and content moderation (profanity, hate speech, grounding etc).'
      }
    ]
  },

  {
    id: 'staff-leadership',
    title: 'Staff Leadership & Advocacy',
    subtitle: 'Driving cross-silo consensus, turning ambiguous opportunities into roadmaps, and mentoring through working software.',
    icon: 'handshake',
    accent: 'secondary',
    badge: 'Staff Impact',
    skills: [
      {
        id: 'cross-functional-strategy',
        name: 'Cross-Functional Technical Strategy',
        tag: 'Technical Strategy',
        technologies: ['Architectural Roadmaps', 'PM / UX / Eng Alignment', 'Trade-off Analysis'],
        impact: 'Guided cross-functional technical strategy across Product Managers, UX researchers, and engineering leads, turning ambiguous opportunities and emerging tech into clear, executable architectural roadmaps.',
        highlight: true
      },
      {
        id: 'stakeholder-alignment',
        name: 'Stakeholder Alignment',
        tag: 'Vision & Alignment',
        technologies: ['Data Storytelling', 'Visual Demos', 'Executive Alignment'],
        impact: 'Aligned diverse stakeholders across product, design, and engineering on unified product visions through data-backed insights, interactive visual demos, and compelling technical storytelling.'
      },
      {
        id: 'platform-mindset',
        name: 'Platform Mindset',
        tag: 'Developer Enablement',
        technologies: ['Reusable Architecture', 'Shared Libraries', 'Golden Paths'],
        impact: 'Championed a "develop once, reuse everywhere" platform philosophy, building shared libraries and architectural primitives designed to make it easy to do the right thing across product squads.'
      },
      {
        id: 'eng-community',
        name: 'Building the Engineering Community',
        tag: 'Community & Culture',
        technologies: ['Guilds & Chapters', 'RFCs', 'Tech Talks & Demos', 'Knowledge Sharing'],
        impact: 'Fostered engineering excellence through active leadership in guilds and chapters, driving RFC reviews, hosting live technical demos and talks, and actively sharing knowledge across teams.'
      }
    ]
  },
  {
    id: 'hci-frontend',
    title: 'HCI, User Needs & Frontend',
    subtitle: 'Connecting human cognitive needs and modern frontend systems to build intuitive, high-performance software.',
    icon: 'devices',
    accent: 'secondary',
    badge: 'User empathy',
    skills: [

      {
        id: 'web-performance-ux',
        name: 'Web Performance',
        tag: 'User Experience',
        technologies: ['Apollo Client', 'Caching Strategies', 'Reusable Libraries'],
        impact: 'Optimized web performance, using client side caching and prefetching strategies that cut page load times by 48%. Reduced CLS across the vertical.'
      },
      {
        id: 'vector-search',
        name: 'Vector Search for Vendor onboarding',
        tag: 'Core Infrastructure',
        technologies: ['Postgresql', 'Vector Search'],
        impact: 'Scaled in-network vendor growth by 14% by deploying vector search for intelligent vendor matching and unifying the disparate vendor addition experiences.'
      },
      {
        id: 'telemetry-athena',
        name: 'Telemetry Mining',
        tag: 'Quantitative Discovery',
        technologies: ['Real User Monitoring', 'SQL Analytics', 'Feature Telemetry'],
        impact: 'Explored feature telemetry and data patterns to size product opportunities, identify user friction points, and guide data-informed product decisions.'
      },
    ]
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    subtitle: 'Architecting resilient, event-driven distributed systems and eliminating infrastructure polling overhead.',
    icon: 'lan',
    accent: 'primary',
    badge: 'Scale & Reliability',
    skills: [
      {
        id: 'event-driven-websockets',
        name: 'Event-Driven Cloud, Pub-sub & WebSockets',
        tag: 'Distributed Systems',
        technologies: ['Real-Time WebSockets', 'Event-Driven Architecture', 'Pub Sub'],
        impact: 'Advocated for and engineered modern event-driven cloud standards, slashing global polling overhead by 82% (from 52M to 9M weekly calls) and demonstrating real-time WebSocket capabilities across engineering squads.',
        highlight: true
      },
      {
        id: 'graphql-interceptor',
        name: 'Custom GraphQL Request Interceptor',
        tag: 'API Resilience',
        technologies: ['GraphQL Interceptors', 'Client Debugging', 'Traffic Optimization'],
        impact: 'Developed a custom GraphQL request interceptor to improve client debugging, actively supporting internal developers to eliminate 99.4% of API permission errors and prevent ~193k redundant daily calls.'
      },
      {
        id: 'react-mfe-architecture',
        name: 'Micro-Frontends & Modular architecture',
        tag: 'Frontend Architecture',
        technologies: ['MFE', 'Shared NPM Libraries', 'Component Architecture'],
        impact: 'Architected & deployed a modular Micro-Frontend framework and shared component library from scratch, hosting internal walkthroughs to accelerate multi-team feature development.',
        highlight: true
      },
      {
        id: 'observability-debugging',
        name: 'System Observability & Tracing',
        tag: 'Reliability & Health',
        technologies: ['Datadog', 'Telemetry Pipelines', 'Observability'],
        impact: 'Engineered client and service observability, tracing permission errors and eliminating cascading distributed system failures under heavy production loads.'
      }
    ]
  }
];
