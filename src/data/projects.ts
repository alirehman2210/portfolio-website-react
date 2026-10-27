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
};

export const technicalProjects: TechnicalProject[] = [
  {
    id: 'ai-supply-chain-exception-copilot',
    name: 'AI Supply Chain Exception Copilot',
    summary:
      'An agentic AI prototype that investigates inventory shortages, evaluates operational constraints, and recommends mitigation strategies.',
    problem:
      'When a shortage surfaces, resolving it means manually piecing together demand forecasts, current inventory, open purchase orders, and supplier terms before anyone can decide what to do. The investigation is slow and repetitive, and the context is scattered across systems.',
    built:
      'An agentic AI prototype that investigates flagged inventory shortages end to end. It gathers relevant operational context, evaluates constraints, and recommends mitigation options for human review and approval rather than taking action autonomously.',
    capabilities: [
      'Multi-step agent workflow that decomposes an exception into investigation steps instead of answering in a single pass.',
      'Retrieval over supplier policies and operational documentation using RAG with pgvector embeddings.',
      'Constraint evaluation across demand forecasts, inventory positions, purchase orders, and supplier policies.',
      'Human-in-the-loop review, so recommendations are proposed for approval rather than executed automatically.',
    ],
    stack: 'Python · LangGraph · Claude · RAG · pgvector',
  },
  {
    id: 'intelligent-fulfillment-routing-engine',
    name: 'Intelligent Fulfillment Routing Engine',
    summary:
      'A Python decision engine that evaluates inventory, shipping costs, and delivery commitments to determine optimal fulfillment strategies.',
    problem:
      'Deciding where an order should ship from means trading off competing goals: the location with stock is not always the cheapest to ship from, and the cheapest option does not always hit the promised delivery date.',
    built:
      'A decision engine that scores the available fulfillment options against those competing constraints and returns the best strategy, with unit tests covering the edge cases where the trade-offs conflict.',
    capabilities: [
      'Optimization logic that weighs inventory availability, shipping cost, and delivery commitments against each other.',
      'Deterministic, inspectable decisions — the same inputs always produce the same routing outcome.',
      'Unit-tested rules covering edge cases such as split inventory and at-risk delivery promises.',
    ],
    stack: 'Python · Optimization Logic · Unit Testing',
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
