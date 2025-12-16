import type { ReactNode } from "react";

import type { ProposalStage } from "@/types/stages";

export type ProposalStageDatum = {
  title: string;
  description: string;
  value: ReactNode;
  tone?: "ok" | "warn";
};

export type ProposalStat = {
  label: string;
  value: ReactNode;
};

export type ProposalListItem = {
  id: string;
  title: string;
  meta: string;
  stage: ProposalStage;
  summaryPill: string;
  summary: string;
  stageData: ProposalStageDatum[];
  stats: ProposalStat[];
  proposer: string;
  proposerId: string;
  chamber: string;
  tier: "Nominee" | "Tribune" | "Legate" | "Consul" | "Citizen";
  proofFocus: "pot" | "pod" | "pog";
  tags: string[];
  keywords: string[];
  date: string;
  votes: number;
  activityScore: number;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const proposals: ProposalListItem[] = [
  {
    id: "orbital-mesh",
    title: "Orbital Mesh Sequencer Upgrade",
    meta: "Protocol Engineering · Legate tier",
    stage: "pool",
    summaryPill: "Protocol Engineering chamber",
    summary:
      "Introduce redundant biometric sequencer nodes to lower latency in the verification flow and enable inter-era checkpoints.",
    stageData: [
      {
        title: "Pool momentum",
        description: "Upvotes / Downvotes",
        value: "24 / 6",
      },
      {
        title: "Attention quorum",
        description: "20% active or ≥10% upvotes",
        value: "Met · 30% engaged",
        tone: "ok",
      },
      { title: "Votes casted", description: "Backing seats", value: "24" },
    ],
    stats: [
      { label: "Budget ask", value: "210k HMND" },
      { label: "Formation impact", value: "High" },
    ],
    proposer: "JohnDoe",
    proposerId: "JohnDoe",
    chamber: "Protocol Engineering",
    tier: "Legate",
    proofFocus: "pot",
    tags: ["Infrastructure", "Security", "High quorum"],
    keywords: [
      "orbital",
      "mesh",
      "seq",
      "upgrade",
      "protocol",
      "engineering",
      "legate",
      "redundancy",
      "latency",
    ],
    date: "2024-04-18",
    votes: 28,
    activityScore: 82,
    ctaPrimary: "Open proposal",
    ctaSecondary: "Watch",
  },
  {
    id: "adaptive-fee",
    title: "Adaptive Fee Shaping",
    meta: "Economics & Treasury · Consul",
    stage: "vote",
    summaryPill: "Economics chamber",
    summary:
      "Dynamic fee split that feeds Formation, treasury, and biometric maintenance based on network stress and quorum activity.",
    stageData: [
      {
        title: "Voting quorum",
        description: "Strict 33% active governors",
        value: "Met · 34%",
        tone: "ok",
      },
      {
        title: "Passing rule",
        description: "≥66.6% + 1 vote yes",
        value: "Current 57%",
        tone: "warn",
      },
      { title: "Time left", description: "Voting window", value: "02h 15m" },
    ],
    stats: [{ label: "Votes casted", value: "34" }],
    proposer: "Victor",
    proposerId: "Victor",
    chamber: "Economics & Treasury",
    tier: "Consul",
    proofFocus: "pod",
    tags: ["Formation", "Community", "High quorum"],
    keywords: [
      "adaptive",
      "fee",
      "treasury",
      "consul",
      "formation",
      "economics",
    ],
    date: "2024-04-16",
    votes: 51,
    activityScore: 90,
    ctaPrimary: "Open proposal",
    ctaSecondary: "Add to agenda",
  },
  {
    id: "sybilguard-mirror",
    title: "SybilGuard L2 Mirror",
    meta: "Security & Infra · Legate",
    stage: "build",
    summaryPill: "Milestone 2 / 4",
    summary:
      "Mirror anti-Sybil heuristics onto an auxiliary rollup so partner DAOs can consume attestations via trust minimised bridges.",
    stageData: [
      { title: "Budget allocated", description: "HMND", value: "420k" },
      { title: "Team slots", description: "Taken / Total", value: "7 / 9" },
      {
        title: "Deployment progress",
        description: "Reported completion",
        value: "68%",
      },
    ],
    stats: [
      { label: "Lead chamber", value: "Security & Infra" },
      { label: "Next check-in", value: "Epoch 186" },
    ],
    proposer: "Sesh",
    proposerId: "Sesh",
    chamber: "Security & Infra",
    tier: "Legate",
    proofFocus: "pog",
    tags: ["Security", "Research", "Infrastructure"],
    keywords: [
      "sybilguard",
      "mirror",
      "security",
      "legate",
      "formation",
      "rollup",
    ],
    date: "2024-04-12",
    votes: 9,
    activityScore: 74,
    ctaPrimary: "View milestone",
    ctaSecondary: "Ping team",
  },
  {
    id: "mesh-talent",
    title: "Mesh Talent Onboarding Fund",
    meta: "Formation Guild · Tribune tier",
    stage: "pool",
    summaryPill: "Formation committee",
    summary:
      "Create a rolling grant for onboarding biometric researchers and UX engineers into the Mesh program with rapid stipends.",
    stageData: [
      {
        title: "Pool momentum",
        description: "Upvotes / Downvotes",
        value: "74 / 5",
      },
      {
        title: "Attention quorum",
        description: "20% active or ≥10% upvotes",
        value: "In progress · 18%",
      },
      { title: "Votes casted", description: "Backing seats", value: "19" },
    ],
    stats: [
      { label: "Requested budget", value: "95k HMND" },
      { label: "Impact area", value: "Talent & education" },
    ],
    proposer: "Tony",
    proposerId: "Tony",
    chamber: "Social Impact",
    tier: "Tribune",
    proofFocus: "pod",
    tags: ["Formation", "Community"],
    keywords: ["mesh", "talent", "formation", "tribune", "education"],
    date: "2024-04-10",
    votes: 19,
    activityScore: 68,
    ctaPrimary: "Open proposal",
    ctaSecondary: "Watch",
  },
  {
    id: "liveness-sentinel",
    title: "Liveness Sentinel Retrofit",
    meta: "Security · Legate",
    stage: "vote",
    summaryPill: "Security chamber",
    summary:
      "Retrofit legacy sentinel nodes with the new liveness circuit breaker to prevent cascading biometric outages across shards.",
    stageData: [
      {
        title: "Voting quorum",
        description: "Strict 33% active governors",
        value: "Pending · 28%",
        tone: "warn",
      },
      {
        title: "Passing rule",
        description: "≥66.6% + 1 vote yes",
        value: "Current 62%",
      },
      { title: "Time left", description: "Voting window", value: "05h 42m" },
    ],
    stats: [{ label: "Equipment budget", value: "60k HMND" }],
    proposer: "Shannon",
    proposerId: "Shannon",
    chamber: "Security & Infra",
    tier: "Legate",
    proofFocus: "pog",
    tags: ["Security", "Infrastructure", "High quorum"],
    keywords: ["liveness", "sentinel", "security", "vote"],
    date: "2024-04-08",
    votes: 33,
    activityScore: 71,
    ctaPrimary: "Open proposal",
    ctaSecondary: "Track vote",
  },
  {
    id: "delegation-ledger",
    title: "Delegation Transparency Ledger",
    meta: "Constitutional · Citizen",
    stage: "archived",
    summaryPill: "Cycle 407",
    summary:
      "Immutable public feed of delegation shifts and vote reroutes with zk-SNARK concealed identities for observers.",
    stageData: [
      {
        title: "Chamber verdict",
        description: "Constitutional quorum 33%",
        value: "Refused",
        tone: "warn",
      },
      {
        title: "Reapply conditions",
        description: "Needed proof",
        value: "New privacy circuit",
      },
      { title: "Cycle", description: "Historic reference", value: "407" },
    ],
    stats: [
      { label: "Rejection reason", value: "Privacy load unresolved" },
      { label: "Author tier", value: "Citizen" },
    ],
    proposer: "Sasha",
    proposerId: "Sasha",
    chamber: "Constitutional",
    tier: "Citizen",
    proofFocus: "pot",
    tags: ["Research", "Infrastructure"],
    keywords: [
      "delegation",
      "transparency",
      "ledger",
      "constitutional",
      "refused",
    ],
    date: "2023-11-18",
    votes: 12,
    activityScore: 34,
    ctaPrimary: "Open proposal",
    ctaSecondary: "View audit notes",
  },
];

export default proposals;
