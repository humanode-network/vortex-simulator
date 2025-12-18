export type ProofKey = "time" | "devotion" | "governance";

export type ProofSection = {
  title: string;
  items: { label: string; value: string }[];
};

export type GovernanceAction = {
  title: string;
  action: string;
  context: string;
  detail: string;
};

export type ProjectCard = {
  title: string;
  status: string;
  summary: string;
  chips: string[];
};

export type HeroStat = { label: string; value: string };

export type QuickDetail =
  | { label: "Tier"; value: string }
  | { label: string; value: string };

export const proofToggleOptions: { key: ProofKey; label: string }[] = [
  { key: "time", label: "PoT" },
  { key: "devotion", label: "PoD" },
  { key: "governance", label: "PoG" },
];

export const humanNodeProfile = {
  heroStats: [
    { label: "ACM", value: "182" },
    { label: "MM", value: "92" },
    { label: "Invision score", value: "82 / 100" },
    { label: "Member since", value: "11.06.2021" },
  ] satisfies HeroStat[],
  quickDetails: [
    { label: "Tier", value: "Legate" },
    { label: "Faction", value: "Anonymous" },
    { label: "Delegation share", value: "113 · 3.4%" },
    { label: "Proposals created", value: "28" },
  ] satisfies QuickDetail[],
  proofSections: {
    time: {
      title: "Proof-of-Time",
      items: [
        { label: "Human node for", value: "3 Y · 4 M" },
        { label: "Governor for", value: "2 Y · 2 M" },
      ],
    },
    devotion: {
      title: "Proof-of-Devotion",
      items: [
        { label: "Proposal accepted?", value: "Yes" },
        { label: "Participated in formation?", value: "Yes" },
      ],
    },
    governance: {
      title: "Proof-of-Governance",
      items: [
        { label: "Actively governed", value: "2 Y · 1 M" },
        { label: "Active governor?", value: "Yes" },
      ],
    },
  } satisfies Record<ProofKey, ProofSection>,
  governanceActions: [
    {
      title: "Reddit brand proposal",
      action: "Upvoted",
      context: "Marketing proposal pool",
      detail:
        "Flagged key talking points for community roll-out and nudged pool momentum.",
    },
    {
      title: "Update runtime proposal",
      action: "Casted vote",
      context: "Protocol chamber",
      detail: "Left implementation notes on validator staggered restarts.",
    },
    {
      title: "The Smurf project",
      action: "Left project",
      context: "Formation",
      detail: "Transitioned responsibilities to Nana after hand-off retro.",
    },
    {
      title: "Fee telemetry upgrade #225",
      action: "Authored proposal",
      context: "Protocol chamber",
      detail:
        "Outlined dual-path telemetry for biometric proofs and mesh fees.",
    },
    {
      title: "Treasury split adjustment #883",
      action: "Presented motion",
      context: "Economic chamber",
      detail: "Arbitrated between Formation and Treasury subcommittees.",
    },
    {
      title: "Protocol SSC quorum drill",
      action: "Coordinated drill",
      context: "Protocol chamber",
      detail: "Simulated night shift quorum loss and documented timings.",
    },
    {
      title: "Mesh sequencer redundancy",
      action: "Reviewed implementation",
      context: "Formation",
      detail:
        "Signed off on milestone 3 safety checklist for redundant sequencers.",
    },
    {
      title: "Budget oversight motion",
      action: "Co-authored memo",
      context: "Governance proposal pool",
      detail: "Drafted memo summarizing risk thresholds for fiscal year.",
    },
    {
      title: "Telemetry SDK handoff",
      action: "Mentored team",
      context: "Faction task force",
      detail: "Recorded screencasts for SDK setup and alert configuration.",
    },
    {
      title: "Chamber audit sync",
      action: "Hosted session",
      context: "Security chamber",
      detail: "Walked through previous incidents and matched to audit trails.",
    },
    {
      title: "Formation handover 12",
      action: "Signed off",
      context: "Formation",
      detail: "Validated milestone artifacts and updated ops board.",
    },
    {
      title: "Governor onboarding brief",
      action: "Led workshop",
      context: "Protocol chamber",
      detail:
        "Gave quickstart checklist for new governors joining mesh topics.",
    },
    {
      title: "Network health retro",
      action: "Published report",
      context: "Protocol council",
      detail: "Shared dashboard snapshots and postmortem experiments.",
    },
    {
      title: "Mesh redundancy QA",
      action: "Completed review",
      context: "Formation logistics",
      detail: "Filed follow-ups for two flaky sensors before sign-off.",
    },
    {
      title: "EVM sandbox beta drill",
      action: "Activated standby",
      context: "Security & infra",
      detail: "Ran pager playbook and escalated to infra for acknowledgement.",
    },
  ] satisfies GovernanceAction[],
  projects: [
    {
      title: "Node Health Kit",
      status: "Formation Logistics · Live",
      summary:
        "Automation bundle for validator diagnostics, recovery, and escalation workflows for operators.",
      chips: ["Budget: 80k HMND", "Milestones: 6 / 9", "Team slots: 2 open"],
    },
    {
      title: "Identity Risk Lab",
      status: "Research · Upcoming",
      summary:
        "Threat modeling track focused on biometric verification attacks and countermeasures.",
      chips: ["Budget: 45k HMND", "Milestones: 0 / 5", "Team slots: 3 open"],
    },
    {
      title: "Mesh Telemetry Board",
      status: "Formation Logistics · Live",
      summary:
        "Realtime visualization board for mesh telemetry anomalies and biometric lag spikes.",
      chips: ["Budget: 52k HMND", "Milestones: 3 / 5", "Team slots: 1 open"],
    },
    {
      title: "Guardian Mentorship Cohort",
      status: "Social Impact · Live",
      summary:
        "Mentorship rotation pairing experienced governors with nominating cohort.",
      chips: ["Budget: 36k HMND", "Milestones: 4 / 6", "Team slots: 0 open"],
    },
    {
      title: "Formation Guild Ops Stack",
      status: "Formation Logistics · Upcoming",
      summary:
        "Comprehensive ops, payroll, and reporting stack for Formation guild leads.",
      chips: ["Budget: 90k HMND", "Milestones: 1 / 8", "Team slots: 4 open"],
    },
    {
      title: "Governor Sync Relay",
      status: "Research · Completed",
      summary:
        "Async sync relay specifications for cross-faction governor collaboration.",
      chips: ["Budget: 28k HMND", "Milestones: 5 / 5", "Team slots: 0 open"],
    },
  ] satisfies ProjectCard[],
} as const;

export const myProfile = {
  heroStats: [
    { label: "ACM", value: "168" },
    { label: "MM", value: "81" },
    { label: "Invision score", value: "78 / 100" },
    { label: "Member since", value: "04.03.2020" },
  ] satisfies HeroStat[],
  quickDetails: [
    { label: "Tier", value: "Consul" },
    { label: "Faction", value: "Anonymous" },
    { label: "Proposals created", value: "18" },
    { label: "Delegation share", value: "2.4%" },
  ] satisfies QuickDetail[],
  proofSections: {
    time: {
      title: "Proof-of-Time",
      items: [
        { label: "Human node for", value: "4 Y · 2 M" },
        { label: "Governor for", value: "3 Y · 4 M" },
      ],
    },
    devotion: {
      title: "Proof-of-Devotion",
      items: [
        { label: "Proposal accepted?", value: "Yes" },
        { label: "Participated in formation?", value: "Yes" },
      ],
    },
    governance: {
      title: "Proof-of-Governance",
      items: [
        { label: "Actively governed", value: "3 Y · 1 M" },
        { label: "Active governor?", value: "Yes" },
      ],
    },
  } satisfies Record<ProofKey, ProofSection>,
  governanceActions: [
    {
      title: "Mesh redundancy QA",
      action: "Upvoted",
      context: "Formation Logistics",
      detail: "Supported final QA milestone with notes on redundant probes.",
    },
    {
      title: "Budget oversight motion",
      action: "Authored proposal",
      context: "Economics chamber",
      detail: "Outlined oversight cadence for mesh treasury replenishment.",
    },
    {
      title: "Protocol SSC drill",
      action: "Coordinated drill",
      context: "Protocol chamber",
      detail: "Ran simulated failover scenario during APAC shift.",
    },
    {
      title: "Telemetry SDK handoff",
      action: "Mentored team",
      context: "Faction task force",
      detail: "Gave onboarding session to task force maintainers.",
    },
    {
      title: "Guardian mentorship cohort",
      action: "Hosted sync",
      context: "Social Outreach",
      detail: "Facilitated feedback retro for mentors and mentees.",
    },
    {
      title: "Node health kit",
      action: "Reviewed implementation",
      context: "Formation",
      detail: "Approved automation scripts for validator health checks.",
    },
    {
      title: "Liveness sentinel retrofit",
      action: "Casted vote",
      context: "Security chamber",
      detail:
        "Logged concerns about roll-out pacing but still backed the upgrade.",
    },
    {
      title: "Formation guild ops",
      action: "Opened proposal",
      context: "Formation Council",
      detail: "Requested budget for guild-specific ops tooling.",
    },
    {
      title: "Mesh telemetry board",
      action: "Filed bug",
      context: "Formation logistics",
      detail: "Documented slow query causing alert lag.",
    },
    {
      title: "Governor onboarding brief",
      action: "Led workshop",
      context: "Protocol chamber",
      detail: "Shared best practices for new mesh governors.",
    },
  ] satisfies GovernanceAction[],
  projects: [
    {
      title: "Node Health Kit",
      status: "Formation Logistics · Live",
      summary:
        "Automation bundle for validator diagnostics and recovery workflows.",
      chips: ["Budget: 80k HMND", "Milestones: 6 / 9", "Team slots: 2 open"],
    },
    {
      title: "Identity Risk Lab",
      status: "Research · Upcoming",
      summary:
        "Threat modeling track focused on biometric verification attacks.",
      chips: ["Budget: 45k HMND", "Milestones: 0 / 5", "Team slots: 3 open"],
    },
    {
      title: "Mesh Telemetry Board",
      status: "Formation Logistics · Live",
      summary:
        "Visualization board for mesh telemetry anomalies and lag spikes.",
      chips: ["Budget: 52k HMND", "Milestones: 3 / 5", "Team slots: 1 open"],
    },
    {
      title: "Guardian Mentorship",
      status: "Social Impact · Live",
      summary:
        "Mentorship rotation pairing experienced governors with nominees.",
      chips: ["Budget: 36k HMND", "Milestones: 4 / 6", "Team slots: 0 open"],
    },
  ] satisfies ProjectCard[],
  history: [
    "Epoch 214 · Proposed mesh redundancy telemetry board",
    "Epoch 209 · Presented budget oversight motion",
    "Epoch 205 · Led guardian mentorship sync",
  ],
} as const;
