export const proposalDraftDetails = {
  title: "Mesh Telemetry Upgrade",
  proposer: "John Doe",
  chamber: "Protocol Engineering",
  focus: "Liveness & validators",
  tier: "Legate",
  budget: "210k HMND",
  formationEligible: true,
  teamSlots: "3 / 6",
  milestonesPlanned: "2 planned · pilot + rollout",
  summary:
    "Refine telemetry ingestion and alerting for sequencer failover playbooks with progressive rollout.",
  rationale:
    "Improve liveness detection by aggregating probes, tuning alerts, and aligning dashboards with chamber SLOs before chamber submission.",
  checklist: [
    "Define KPIs and failure domains.",
    "Add staged alerting and on-call runbooks.",
    "Align Formation playbooks for rollout.",
  ],
  milestones: [
    "Pilot deploy on two clusters; collect baselines.",
    "Global rollout with rollback gates.",
    "Docs, dashboards, and operator training.",
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
  attachments: [
    { title: "Rollout plan (PDF)", href: "#" },
    { title: "Telemetry checklist (DOC)", href: "#" },
    { title: "Budget breakdown (XLS)", href: "#" },
  ],
} as const;
