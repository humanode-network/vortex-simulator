export const invisionGovernanceState = {
  label: "Egalitarian Republic",
  metrics: [
    { label: "Legitimacy", value: "78%" },
    { label: "Stability", value: "72%" },
    { label: "Centralization", value: "44%" },
  ],
} as const;

export const invisionEconomicIndicators = [
  {
    label: "Treasury reserves",
    value: "412M HMND",
    detail: "52 weeks of runway",
  },
  { label: "Burn rate", value: "7.8M HMND / epoch", detail: "Up 4% vs prior" },
  {
    label: "Civic budget",
    value: "112M HMND",
    detail: "Infrastructure & grants",
  },
  {
    label: "Trade routes",
    value: "9 active",
    detail: "Formation & faction deals",
  },
] as const;

export const invisionRiskSignals = [
  {
    title: "Faction cohesion",
    status: "Low risk",
    detail: "Blocs aligned on governance reforms",
  },
  {
    title: "External deterrence",
    status: "Moderate risk",
    detail: "Neighboring factions probing markets",
  },
  {
    title: "Treasury liquidity",
    status: "Low risk",
    detail: "Healthy reserves & inflows",
  },
  {
    title: "Formation morale",
    status: "Watch",
    detail: "Two squads reported burnout",
  },
] as const;

export const invisionChamberProposals = [
  {
    title: "Humanode EVM Dev Starter Kit & Testing Sandbox",
    effect:
      "Starter kit + sandbox to cut time-to-first-dApp to under 30 minutes",
    sponsors: "Protocol Guard · Mesh Vanguard",
  },
  {
    title: "Voluntary Governor Commitment Staking",
    effect:
      "Optional commitment staking with opt-in self-slashing (no voting power impact)",
    sponsors: "Civic Union · Governance Commons",
  },
  {
    title: "Biometric Account Recovery & Key Rotation Pallet",
    effect: "Key rotation + recovery via biometric identity (audited pallet)",
    sponsors: "Protocol Guard · Guardian Circle",
  },
] as const;
