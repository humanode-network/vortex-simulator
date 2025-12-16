export type FormationMetric = {
  label: string;
  value: string;
  dataAttr: string;
};

export type FormationCategory = "all" | "research" | "development" | "social";
export type FormationStage = "live" | "gathering" | "completed";

export type FormationProject = {
  id: string;
  title: string;
  focus: string;
  proposer: string;
  summary: string;
  category: FormationCategory;
  stage: FormationStage;
  budget: string;
  milestones: string;
  teamSlots: string;
};

export const formationMetrics: FormationMetric[] = [
  { label: "Total funded HMND", value: "340k", dataAttr: "metric-hmnd" },
  { label: "Active projects", value: "12", dataAttr: "metric-active" },
  { label: "Open team slots", value: "9", dataAttr: "metric-slots" },
  { label: "Milestones delivered", value: "46", dataAttr: "metric-milestones" },
];

export const formationProjects: FormationProject[] = [
  {
    id: "node-health-kit",
    title: "Node Health Kit",
    focus: "Formation Logistics · Tooling",
    proposer: "JohnDoe",
    summary:
      "Tooling bundle to automate node diagnostics and recovery workflows for operators.",
    category: "development",
    stage: "live",
    budget: "80k HMND",
    milestones: "6 / 9",
    teamSlots: "2 open",
  },
  {
    id: "identity-risk-lab",
    title: "Identity Risk Lab",
    focus: "Research · Upcoming cohort",
    proposer: "Raamara",
    summary:
      "Exploratory track modeling biometric verification attacks and mitigation strategies.",
    category: "research",
    stage: "gathering",
    budget: "45k HMND",
    milestones: "0 / 5",
    teamSlots: "3 open",
  },
  {
    id: "community-field-unit",
    title: "Community Field Unit",
    focus: "Social Good · Outreach",
    proposer: "Nana",
    summary:
      "Mobile mesh of community ambassadors for onboarding and support coverage.",
    category: "social",
    stage: "live",
    budget: "65k HMND",
    milestones: "4 / 6",
    teamSlots: "1 open",
  },
  {
    id: "deterrence-sim-lab",
    title: "Deterrence Sim Lab",
    focus: "Research · Security",
    proposer: "Victor",
    summary:
      "Scenario simulator for deterrence drills and biometric failure rehearsals.",
    category: "research",
    stage: "completed",
    budget: "50k HMND",
    milestones: "6 / 6",
    teamSlots: "0 open",
  },
];

export default formationProjects;
