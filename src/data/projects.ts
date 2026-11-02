// Single source of truth for project content and anchor IDs.
// The homepage previews and the projects showcase both link to
// `/projects#<id>`, so these ids must stay stable.
//
// The copy here is deliberately short. The long-form problem statements,
// architecture notes and decision records live in each project's README,
// PRODUCT_SPEC.md and DECISIONS.md on GitHub, which is where someone who
// wants the detail should end up.
//
// Every figure in a `showcase` or `result` block comes from the published
// repository's own test suite, run against synthetic data. Nothing here
// describes production use, real customers, or business outcomes.

export type ShortageShowcase = {
  kind: 'shortage';
  unit: string;
  demand: number;
  available: number;
  shortage: number;
  // The validated mitigation options. These sum to the shortage.
  options: { label: string; units: number }[];
  caption: string;
};

export type ComparisonShowcase = {
  kind: 'comparison';
  // Two runs of the same batch, differing in one rule.
  rows: { label: string; kept: number; total: number; cost: string; note: string }[];
  takeaway: string;
  caption: string;
};

export type Showcase = ShortageShowcase | ComparisonShowcase;

export type ProjectDecision = {
  title: string;
  body: string;
};

export type FlagshipProject = {
  id: string;
  name: string;
  // One line. Used on the selector, the homepage card and the panel header.
  tagline: string;
  // One sentence each. The full versions are in the GitHub documents.
  problem: string;
  built: string;
  // The visual demonstration. This is the main content of the panel.
  showcase: Showcase;
  // One decision, kept short enough to read in a few seconds.
  decision: ProjectDecision;
  // The single result the homepage card leads with. Drawn from the same
  // verified test run as the showcase below it.
  cardResult: string;
  // Main technologies only.
  stack: string[];
  repoUrl: string;
};

export const flagshipProjects: FlagshipProject[] = [
  {
    // The id stays 'ai-supply-chain-exception-copilot' even though the project
    // is now called the Shortage Copilot. It is the anchor the homepage links
    // to and may be bookmarked, so renaming it would break those links.
    id: 'ai-supply-chain-exception-copilot',
    name: 'AI Supply Chain Shortage Copilot',
    tagline:
      'Investigates a projected shortage, then checks every suggestion against the stock that actually exists.',
    problem:
      'A projected shortage means checking demand, stock, incoming deliveries and supplier policies across four places before anyone can decide what to do.',
    built:
      'A copilot that runs that investigation in one pass, proposes ways to close the gap, and checks each one against the stock that exists and the rules that apply.',
    showcase: {
      kind: 'shortage',
      unit: 'units',
      demand: 12400,
      available: 10600,
      shortage: 1800,
      options: [
        { label: 'Transfer from Hamburg', units: 900 },
        { label: 'Transfer from Munich', units: 200 },
        { label: 'Approved substitution', units: 600 },
        { label: 'Supplier expedite', units: 100 },
      ],
      caption:
        'AI proposes the options, fixed business rules check each one against stock and policy, and a planner approves or rejects them. Figures are from a synthetic test scenario.',
    },
    decision: {
      title: 'AI proposes. Rules validate. People decide.',
      body:
        'An early version suggested substituting 1,800 units when the site held 600. The policy text was already in the prompt and the model produced the larger number anyway, so the fix was a checking step it cannot talk its way past — not a firmer instruction. Nothing is actioned either way: a planner approves or rejects whatever survives the checks.',
    },
    cardResult: 'Found an 1,800-unit shortage and four validated options a planner could approve',
    stack: ['Python', 'LangGraph', 'Claude', 'RAG', 'PostgreSQL/pgvector'],
    repoUrl: 'https://github.com/alirehman2210/ai-supply-chain-shortage-copilot',
  },
  {
    id: 'intelligent-fulfillment-routing-engine',
    name: 'Intelligent Fulfillment Routing Engine',
    tagline:
      'Chooses which warehouse ships each order, and records why the others lost.',
    problem:
      'The warehouse with stock is not always the cheapest to ship from, and the cheapest one does not always arrive by the date the customer was promised.',
    built:
      'A routing engine that checks inventory, shipping costs, and delivery dates. It prioritizes delivery promises, considers the impact on limited stock, and records why each warehouse was selected.',
    showcase: {
      kind: 'comparison',
      rows: [
        {
          label: 'File-order routing',
          kept: 5,
          total: 9,
          cost: '$47.70',
          note: 'Orders handled in the sequence they arrived',
        },
        {
          label: 'Urgency-first routing',
          kept: 6,
          total: 9,
          cost: '$47.70',
          note: 'Orders with the least room to spare handled first',
        },
      ],
      takeaway:
        'Changing the order the batch was worked through protected one more delivery promise, at exactly the same shipping cost.',
      caption:
        'The same synthetic batch of 10 orders, run twice. One order is rejected as invalid before pricing, so 9 are evaluated.',
    },
    decision: {
      title: 'Batch order is a product decision, not an implementation detail',
      body:
        'Routing orders as they arrived cost a delivery promise for no saving at all. It only showed up by running the same batch both ways and comparing, which is now how any routing rule gets evaluated.',
    },
    cardResult: 'Kept one more delivery promise at exactly the same shipping cost',
    stack: ['Python', 'Fulfillment Routing', 'Inventory Optimization'],
    repoUrl: 'https://github.com/alirehman2210/intelligent-fulfillment-routing',
  },
];

export type AdditionalProject = {
  id: string;
  name: string;
  summary: string;
  // One line for the homepage list, where the full summary is too long.
  shortSummary: string;
  stack: string[];
};

// Smaller entries. No published repository, so no verified result and no
// case study link — and the page shows them at a size that matches.
export const additionalProjects: AdditionalProject[] = [
  {
    id: 'ai-customer-support-copilot',
    name: 'AI Customer Support Copilot',
    summary:
      'An AI-assisted workflow that classifies support tickets, retrieves the policy that applies, and drafts a recommended response for a person to review before anything reaches a customer.',
    shortSummary:
      'Classifies support requests, retrieves relevant policies, and drafts responses for human review.',
    stack: ['n8n', 'LLMs', 'Workflow Automation'],
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
