export type PoolProposalPage = {
  title: string;
  proposer: string;
  proposerId: string;
  chamber: string;
  focus: string;
  tier: string;
  budget: string;
  cooldown: string;
  formationEligible: boolean;
  teamSlots: string;
  milestones: string;
  upvotes: number;
  downvotes: number;
  attentionQuorum: number;
  activeGovernors: number;
  upvoteFloor: number;
  rules: string[];
  attachments: { id: string; title: string }[];
  teamLocked: { name: string; role: string }[];
  openSlotNeeds: { title: string; desc: string }[];
  milestonesDetail: { title: string; desc: string }[];
};

export type ChamberProposalPage = {
  title: string;
  proposer: string;
  proposerId: string;
  chamber: string;
  budget: string;
  impact: string;
  timeLeft: string;
  votes: { yes: number; no: number; abstain: number };
  attentionQuorum: number;
  passingRule: string;
  engagedGovernors: number;
  activeGovernors: number;
  attachments: { id: string; title: string }[];
};

export type FormationProposalPage = {
  title: string;
  chamber: string;
  proposer: string;
  proposerId: string;
  budget: string;
  impact: string;
  timeLeft: string;
  teamSlots: string;
  milestones: string;
  progress: string;
  stageData: { title: string; description: string; value: string }[];
  stats: { label: string; value: string }[];
  lockedTeam: { name: string; role: string }[];
  openSlots: { title: string; desc: string }[];
  milestonesDetail: { title: string; desc: string }[];
  attachments: { id: string; title: string }[];
};

const poolProposals: Record<string, PoolProposalPage> = {
  "sequencer-upgrade": {
    title: "Sequencer redundancy rollout",
    proposer: "John Doe",
    proposerId: "john-doe",
    chamber: "Protocol chamber",
    focus: "Liveness & validators",
    tier: "Legate",
    budget: "210k HMND",
    cooldown: "Withdraw cooldown: 12h",
    formationEligible: true,
    teamSlots: "3 / 6",
    milestones: "2",
    upvotes: 18,
    downvotes: 4,
    attentionQuorum: 0.22,
    activeGovernors: 100,
    upvoteFloor: 10,
    rules: [
      "22% attention from active governors required.",
      "At least 10% upvotes to move to chamber.",
      "Delegated votes are ignored in the pool.",
    ],
    attachments: [
      { id: "rollout-plan", title: "Rollout plan (PDF)" },
      { id: "telemetry-checklist", title: "Telemetry checklist (DOC)" },
      { id: "budget-breakdown", title: "Budget breakdown (XLS)" },
    ],
    teamLocked: [
      { name: "John Doe", role: "Lead · Protocol" },
      { name: "Raamara", role: "Ops & rollout" },
      { name: "Nyx", role: "Telemetry" },
    ],
    openSlotNeeds: [
      {
        title: "SRE / Reliability",
        desc: "Own failover playbooks and alert tuning during rollout.",
      },
      {
        title: "QA engineer",
        desc: "Validate checkpoints and regression-test liveness across clusters.",
      },
      {
        title: "Tech writer",
        desc: "Document runbooks and operator guides post-rollout.",
      },
    ],
    milestonesDetail: [
      {
        title: "Pilot deploy",
        desc: "Shadow checkpoints on 2 clusters; collect liveness/latency baselines.",
      },
      {
        title: "Global rollout",
        desc: "Stage to remaining clusters with rollback gates on regressions.",
      },
      {
        title: "Handoff & docs",
        desc: "Finalize dashboards, runbooks, and training for chamber ops.",
      },
    ],
  },
};

const chamberProposals: Record<string, ChamberProposalPage> = {
  "adaptive-fee": {
    title: "Adaptive Fee Shaping",
    proposer: "Victor",
    proposerId: "Victor",
    chamber: "Economics & Treasury",
    budget: "210k HMND",
    impact: "Medium",
    timeLeft: "05h 15m",
    votes: { yes: 34, no: 18, abstain: 3 },
    attentionQuorum: 0.33,
    passingRule: "≥66.6% + 1 yes within quorum",
    engagedGovernors: 55,
    activeGovernors: 100,
    attachments: [
      { id: "fee-split-design", title: "Fee split design (PDF)" },
      { id: "telemetry-checklist", title: "Telemetry checklist (DOC)" },
    ],
  },
};

const formationProposals: Record<string, FormationProposalPage> = {
  "deterrence-sim-lab": {
    title: "Deterrence Sim Lab",
    chamber: "Research",
    proposer: "Research Lab",
    proposerId: "john-doe",
    budget: "180k HMND",
    impact: "High",
    timeLeft: "12d",
    teamSlots: "3 / 6",
    milestones: "2 / 3",
    progress: "68%",
    stageData: [
      { title: "Budget allocated", description: "HMND", value: "180k" },
      { title: "Team slots", description: "Taken / Total", value: "3 / 6" },
      {
        title: "Deployment progress",
        description: "Reported completion",
        value: "68%",
      },
    ],
    stats: [
      { label: "Lead chamber", value: "Research" },
      { label: "Next check-in", value: "Epoch 186" },
    ],
    lockedTeam: [
      { name: "John Doe", role: "Lead · Research" },
      { name: "Nyx", role: "Telemetry & Ops" },
      { name: "Raamara", role: "QA" },
    ],
    openSlots: [
      {
        title: "SRE / Reliability",
        desc: "Own rollout stability and failover drills.",
      },
      {
        title: "QA engineer",
        desc: "Validate milestones and regression suite.",
      },
      {
        title: "Tech writer",
        desc: "Document runbooks and Formation reports.",
      },
    ],
    milestonesDetail: [
      {
        title: "Pilot deploy",
        desc: "Shadow checkpoints on 2 clusters; collect liveness baselines.",
      },
      {
        title: "Global rollout",
        desc: "Stage to remaining clusters with rollback gates on regressions.",
      },
      {
        title: "Handoff & docs",
        desc: "Finalize dashboards, runbooks, and training for chamber ops.",
      },
    ],
    attachments: [
      { id: "simulation-playbook", title: "Simulation playbook (PDF)" },
      { id: "milestone-breakdown", title: "Milestone breakdown (XLS)" },
    ],
  },
};

export function getPoolProposalPage(id?: string) {
  return (
    poolProposals[id ?? "sequencer-upgrade"] ??
    poolProposals["sequencer-upgrade"]
  );
}

export function getChamberProposalPage(id?: string) {
  return (
    chamberProposals[id ?? "adaptive-fee"] ?? chamberProposals["adaptive-fee"]
  );
}

export function getFormationProposalPage(id?: string) {
  return (
    formationProposals[id ?? "deterrence-sim-lab"] ??
    formationProposals["deterrence-sim-lab"]
  );
}
