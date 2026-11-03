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

export type PipelineShowcase = {
  kind: 'pipeline';
  // The stages of the workflow, in the order they run. `role` decides how a
  // stage is drawn: the point of the visual is which steps are a model and
  // which are ordinary code.
  stages: { step: number; name: string; role: 'input' | 'code' | 'ai' | 'output'; note: string }[];
  // What the deterministic stage actually enforces, in the reader's language.
  enforces: string[];
  // The honest qualification on those checks: they fire on recognized wording,
  // which is not the same as catching every phrasing a customer might use.
  enforcesNote: string;
  caption: string;
};

export type Showcase = ShortageShowcase | ComparisonShowcase | PipelineShowcase;

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
  // The line under the card result saying where it came from. Most projects
  // use the shared default; set this where the qualification differs.
  cardDisclosure?: string;
  // Main technologies only.
  stack: string[];
  // A shorter stack for the homepage card, where the full list is too long.
  // Falls back to `stack`.
  cardStack?: string[];
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
        'During early testing, the AI proposed substituting 1,800 units when only 600 were available. I added deterministic validation rules in Python to check inventory limits and substitution policies before recommendations reach a planner. The planner can then approve or reject the proposed solutions.',
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
  {
    id: 'ai-customer-support-copilot',
    name: 'AI Customer Support Copilot',
    tagline:
      'Analyzes support tickets, checks approved policies, and prepares recommendations and draft responses for human review.',
    problem:
      'Support agents spend time understanding incoming tickets, determining urgency, checking company policies, and preparing responses before they can help a customer.',
    built:
      'An AI-assisted workflow using n8n and Claude that classifies tickets, selects relevant approved knowledge, recommends next steps, applies deterministic policy checks, and prepares a draft response for an agent to review.',
    showcase: {
      kind: 'pipeline',
      // The eight stages as published in the repository's own diagram.
      stages: [
        { step: 1, name: 'Ticket comes in', role: 'input', note: 'Subject, message, history' },
        { step: 2, name: 'Normalize ticket', role: 'code', note: 'One consistent shape' },
        { step: 3, name: 'Select approved knowledge', role: 'code', note: 'Keyword match, plus a safety policy' },
        { step: 4, name: 'Draft the brief', role: 'ai', note: 'Claude Sonnet, fixed JSON fields' },
        { step: 5, name: 'Enforce policy rules', role: 'code', note: 'Can overrule the model' },
        { step: 6, name: 'Second opinion', role: 'ai', note: 'Claude Haiku, may fail safely' },
        { step: 7, name: 'Build the agent view', role: 'code', note: 'Summary, actions, draft reply' },
        { step: 8, name: 'Show agent brief', role: 'output', note: 'Draft ready for human review' },
      ],
      enforces: [
        'When a duplicate charge is recognized, the ticket is set to Billing and at least High, with a "do not promise a refund" note attached',
        'When the ticket shows the customer has contacted support before, an escalation recommendation is added',
        'Payroll is raised to Critical only when the export is blocked and a deadline is close, not whenever payroll is mentioned',
        'Any knowledge source the model cites that it was never given is removed from the brief',
      ],
      enforcesNote:
        'The first three checks run on ticket wording the rules recognize, so they lower the chance of an unsafe recommendation rather than removing it; a ticket phrased outside those patterns may not match. The citation check does not depend on wording \u2014 it compares every source cited against the ones actually supplied.',
      caption:
        'Seventeen live scenarios were run against the real Claude API, covering billing, payroll, escalation, policy safeguards and replies in four languages. A further 192 offline assertions across 19 tickets check the rules without calling a model. Every ticket and policy used in testing is fictional.',
    },
    decision: {
      title: 'Models draft. Rules check. Agents review.',
      body:
        'I used deterministic JavaScript rules to enforce important support policies instead of relying entirely on AI instructions. For example, mentioning payroll doesn’t automatically make a ticket Critical. The workflow checks whether payroll is blocked and a deadline is approaching before applying that priority.',
    },
    cardResult: '17 of 17 live test scenarios matched their expected outcomes.',
    cardDisclosure: 'Tested with synthetic support tickets using the real Claude API.',
    stack: ['n8n', 'Claude Sonnet', 'Claude Haiku', 'JavaScript', 'Policy Validation'],
    cardStack: ['n8n', 'Claude', 'JavaScript', 'Workflow Automation'],
    repoUrl: 'https://github.com/alirehman2210/ai-customer-support-copilot',
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
//
// Empty since the AI Customer Support Copilot was published with its own
// repository and tests, and moved up to `flagshipProjects`. The list and the
// sections that render it are kept, guarded on length, for the next one.
export const additionalProjects: AdditionalProject[] = [];

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
