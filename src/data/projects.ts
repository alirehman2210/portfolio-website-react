// Single source of truth for project content and anchor IDs.
// The homepage "Featured Work" previews link to `/projects#<id>`, so these ids
// must stay stable.

export type TechnicalProject = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  built: string;
  capabilities: string[];
  stack: string;
  // Optional public repository. When set, the projects page shows a
  // "Read Case Study on GitHub" link for that project.
  repoUrl?: string;
};

export const technicalProjects: TechnicalProject[] = [
  {
    // The id stays 'ai-supply-chain-exception-copilot' even though the project
    // is now called the Shortage Copilot. It is the anchor the homepage links
    // to and may be bookmarked, so renaming it would break those links.
    id: 'ai-supply-chain-exception-copilot',
    name: 'AI Supply Chain Shortage Copilot',
    summary:
      'An AI copilot that investigates projected ingredient shortages, checks supplier and inventory constraints, and recommends solutions for human review.',
    problem:
      'When a shortage surfaces, resolving it means manually piecing together demand forecasts, current inventory, open purchase orders, and supplier terms before anyone can decide what to do. The investigation is slow and repetitive, and the context is scattered across systems.',
    built:
      'I built an AI copilot that investigates projected ingredient shortages by checking demand, inventory, incoming deliveries, and supplier policies. It recommends possible solutions, checks them against inventory and business restrictions, and presents them for a planner to review and approve.',
    capabilities: [
      'Calculates projected shortages by comparing demand with available inventory and incoming deliveries.',
      'Uses AI to find relevant supplier rules and recommend ways to address shortages.',
      'Checks recommendations against inventory, timing, and policy restrictions before human review.',
    ],
    stack: 'Python · LangGraph · Claude · RAG · PostgreSQL/pgvector',
    repoUrl: 'https://github.com/alirehman2210/ai-supply-chain-shortage-copilot',
  },
  {
    id: 'intelligent-fulfillment-routing-engine',
    name: 'Intelligent Fulfillment Routing Engine',
    summary:
      'A Python routing engine that checks inventory, shipping costs, and delivery dates to choose which warehouse should ship each order while prioritizing delivery promises.',
    problem:
      'Deciding where an order should ship from means trading off competing goals: the location with stock is not always the cheapest to ship from, and the cheapest option does not always hit the promised delivery date.',
    built:
      'I built a Python routing engine that checks warehouse inventory, compares shipping costs, and estimates delivery dates. It uses clear business rules to prioritize delivery promises, manage limited inventory, and explain why each warehouse was selected.',
    capabilities: [
      'Checks warehouse inventory, shipping costs, and delivery dates before selecting where an order should ship.',
      'Processes the most time-sensitive orders first when multiple orders compete for limited inventory.',
      'Records why each warehouse was selected or rejected, with automated tests covering important routing scenarios and edge cases.',
    ],
    stack: 'Python · Fulfillment Routing · Inventory Optimization',
    repoUrl: 'https://github.com/alirehman2210/intelligent-fulfillment-routing',
  },
  {
    id: 'ai-customer-support-copilot',
    name: 'AI Customer Support Copilot',
    summary:
      'An AI-assisted workflow that classifies support tickets, retrieves policies, and generates response recommendations with human review.',
    problem:
      'Support agents spend much of their time triaging repetitive tickets and hunting through policy documentation before they can draft a reply, which slows first response without adding judgment.',
    built:
      'An automated workflow that classifies each incoming ticket, pulls the policy relevant to it, and drafts a recommended response — then routes it to a human to review before anything reaches a customer.',
    capabilities: [
      'Automatic ticket classification to route issues by type.',
      'Policy retrieval that grounds each draft in the applicable documentation.',
      'Response generation that produces a recommendation rather than an auto-reply.',
      'A human review step built into the workflow before any response is sent.',
    ],
    stack: 'n8n · LLMs · Workflow Automation',
  },
];

export type PersonalProject = {
  id: string;
  name: string;
  details: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    id: 'ai-knowledge-retention-newsletter',
    name: 'AI-Driven Knowledge Retention Newsletter',
    details: [
      'Designed and launched an automated AI newsletter that distills long-form content (articles, YouTube transcripts, and PDFs) into structured summaries delivered via email, growing the audience to 100+ readers.',
      'Built the product to solve a personal retention problem: preventing knowledge decay after consuming high-volume educational content by reinforcing learning through repetition and reflection.',
      'Implemented automated content ingestion, AI summarization, mobile-optimized email rendering, and subscriber management using Google Apps Script and OpenAI APIs.',
    ],
  },
  {
    id: 'personal-knowledge-site',
    name: 'Personal Knowledge Site | ali-rehman.com',
    details: [
      'Built a personal site to intentionally track books read by year and document personal travel through curated photography, creating a long-term record of learning and lived experiences.',
      'Designed the site as a lightweight system to preserve timelines and personal milestones.',
    ],
  },
];
