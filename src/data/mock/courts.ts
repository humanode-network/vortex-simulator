export type CourtCase = {
  id: string;
  title: string;
  subject: string;
  triggeredBy: string;
  status: "jury" | "deliberating" | "closed";
  reports: number;
  juryCount: number;
  opened: string; // dd/mm/yyyy
};

export const courtCases: CourtCase[] = [
  {
    id: "delegation-44",
    title: "Delegation Dispute #44",
    subject: "Faction · Protocol Keepers",
    triggeredBy: "18 reports · Delegation shift",
    status: "jury",
    reports: 18,
    juryCount: 12,
    opened: "02/04/2025",
  },
  {
    id: "treasury-audit-12",
    title: "Treasury Audit #12",
    subject: "Chamber · Economics & Treasury",
    triggeredBy: "12 reports · Budget anomaly",
    status: "deliberating",
    reports: 12,
    juryCount: 12,
    opened: "29/03/2025",
  },
  {
    id: "proposal-appeal-883",
    title: "Proposal Appeal #883",
    subject: "Proposal · Adaptive fee shaping",
    triggeredBy: "9 reports · Procedural appeal",
    status: "closed",
    reports: 9,
    juryCount: 12,
    opened: "21/03/2025",
  },
];

export default courtCases;
