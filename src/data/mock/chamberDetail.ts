export type ProposalStage = "upcoming" | "live" | "ended";

export type ChamberProposal = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  lead: string;
  nextStep: string;
  timing: string;
  stage: ProposalStage;
};

export type Governor = {
  id: string;
  name: string;
  tier: string;
  focus: string;
};

export type Thread = {
  id: string;
  title: string;
  author: string;
  replies: number;
  updated: string;
};

export type ChatMessage = {
  id: string;
  author: string;
  message: string;
};

export const proposalStageOptions: { value: ProposalStage; label: string }[] = [
  { value: "upcoming", label: "Upcoming" },
  { value: "live", label: "Live" },
  { value: "ended", label: "Ended" },
];

export const chamberProposals: ChamberProposal[] = [
  {
    id: "sequencer-upgrade",
    title: "Sequencer redundancy rollout",
    meta: "Legate · Protocol Engineering",
    summary:
      "Enable redundant biometric sequencers to lower failover time and unlock epoch double commits.",
    lead: "JohnDoe",
    nextStep: "Awaiting quorum scheduling",
    timing: "Scheduled · 02d 14h",
    stage: "upcoming",
  },
  {
    id: "vm-benchmarks",
    title: "VM verifier benchmarks",
    meta: "Consul · Protocol Engineering",
    summary:
      "Establish baseline performance telemetry for new WASM verifier prior to production slot.",
    lead: "Victor",
    nextStep: "Vote closes in",
    timing: "Live · 05h 42m",
    stage: "live",
  },
  {
    id: "formation-slot-requests",
    title: "Formation slot requests",
    meta: "Legate · Formation Logistics",
    summary:
      "Allocate three additional slot pools for biometrics research squads.",
    lead: "Sesh",
    nextStep: "Archived outcome",
    timing: "Ended · Passed",
    stage: "ended",
  },
];

export const chamberGovernors: Governor[] = [
  { id: "johndoe", name: "JohnDoe", tier: "Legate", focus: "Protocol" },
  { id: "victor", name: "Victor", tier: "Consul", focus: "Economics" },
  { id: "sesh", name: "Sesh", tier: "Legate", focus: "Security" },
  { id: "nyx", name: "Nyx", tier: "Ecclesiast", focus: "Infra" },
  { id: "nana", name: "Nana", tier: "Consul", focus: "Formation" },
  { id: "raamara", name: "Raamara", tier: "Consul", focus: "Treasury" },
];

export const chamberThreads: Thread[] = [
  {
    id: "thread-1",
    title: "Sequencer redundancy rollout",
    author: "JohnDoe",
    replies: 4,
    updated: "1h ago",
  },
  {
    id: "thread-2",
    title: "VM verifier benchmarks",
    author: "Victor",
    replies: 11,
    updated: "3h ago",
  },
  {
    id: "thread-3",
    title: "Formation slot requests",
    author: "Sesh",
    replies: 6,
    updated: "6h ago",
  },
];

export const chamberChatLog: ChatMessage[] = [
  {
    id: "chat-1",
    author: "JohnDoe",
    message: "Milestone 2 patch deployed, please verify.",
  },
  {
    id: "chat-2",
    author: "Victor",
    message: "Treasury hook live, watching KPIs.",
  },
  {
    id: "chat-3",
    author: "Sesh",
    message: "Need 2 reviewers for the new biometrics spec.",
  },
];

export default chamberProposals;
