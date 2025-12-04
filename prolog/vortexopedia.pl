% Vortexopedia knowledge base (SWI-Prolog)
% Schema: vortex_term(RefNum, Id, Name, Category, ShortDesc, LongDescList, Tags, RelatedIds, Examples, Stages, Links, Source, Updated).
% Stages is a list of atoms like pool | chamber | formation | courts | feed.
% Links is a list of dicts: link{label:Label, url:Url}.

:- module(vortexopedia, [vortex_term/12, stage_label/2]).

% --- Stage labels (keep in sync with UI) ---
stage_label(pool, "Proposal pool").
stage_label(chamber, "Chamber vote").
stage_label(formation, "Formation").
stage_label(courts, "Courts").
stage_label(feed, "Feed").
stage_label(factions, "Factions").
stage_label(cm, "CM panel").

% --- Terms ---

vortex_term(
  1,
  "vortex",
  "Vortex",
  governance,
  "Main governing body of the Humanode network with cognitocratic egalitarian voting among human validators.",
  [
    "Vortex is the on-chain governing body that gradually absorbs the authority of Humanode Core and disperses it among human nodes.",
    "It is designed so that each governor has equal formal voting power, relying on cryptobiometrics to ensure that every governor is a unique living human.",
    "Vortex is implemented as a stack of proposal pools, voting chambers and the Formation executive layer."
  ],
  [governance, dao, humanode, vortex],
  ["vortex-structure", "cognitocracy", "proposal-pool-system-vortex-formation-stack", "specialization-chamber", "general-chamber", "formation", "governor", "human-node"],
  ["Changing fee distribution on Humanode via a Vortex proposal voted in the relevant chamber."],
  [chamber, pool, formation],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}, link{label:"App", url:"/vortexopedia/vortex"}],
  "gitbook:vortex-1.0:synopsis",
  "2025-12-04"
).

vortex_term(
  2,
  "human_node",
  "Human node",
  governance,
  "A uniquely biometric-verified person who runs a validator node, participates in consensus, and earns fees, but may or may not participate in governance.",
  [
    "Defined as a person who has undergone cryptobiometric processing and runs a node in the Humanode network.",
    "Receives network transaction fees as a validator.",
    "Does not necessarily participate in governance (non-governing by default).",
    "Can become a Governor by meeting governance participation requirements."
  ],
  [role, humanode, validator, sybil_resistance],
  ["governor", "delegator", "proof_of_time_pot", "proof_of_human_existence", "tier1_nominee"],
  ["In the app you can treat “human node” as the base identity type; every governor profile is a specialized human node."],
  [global],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0/basis-of-vortex"}],
  "Basis of Vortex – Vortex Roles",
  "2025-12-04"
).

vortex_term(
  3,
  "cognitocracy",
  "Cognitocracy",
  governance,
  "Legislative model where only those who can bring constructive, deployable innovation get voting rights (cognitocrats/governors).",
  [
    "Grants voting rights only to those who have proven professional, creative merit in a specialization.",
    "Cognitocrat and governor are interchangeable; one cannot be a governor without being a cognitocrat."
  ],
  [principle, governance, voting_rights, specialization],
  ["meritocracy", "governor", "human_node", "vortex"],
  ["Only cognitocrats can vote on matters of their specialization."],
  [global, chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  4,
  "meritocracy",
  "Meritocracy",
  governance,
  "Concentrates power in those with proof of proficiency; Vortex evaluates innovation merit separately from functional work.",
  [
    "Aims to concentrate decision-making in hands of those with proven proficiency.",
    "Vortex uses PoT and PoD to emancipate governors from Nominee to Citizen."
  ],
  [principle, governance, merit],
  ["cognitocracy", "proof_of_time_pot", "proof_of_devotion_pod"],
  ["Governors progress tiers via PoT/PoD merit rather than popularity."],
  [global],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  5,
  "local_determinism",
  "Local determinism",
  governance,
  "Rejects ideology; values solutions that work efficiently regardless of political spectrum.",
  [
    "Denies ideology as a means for power; focuses on field-specific, workable solutions.",
    "As long as a solution works efficiently, its ideological alignment is irrelevant."
  ],
  [principle, governance, pragmatism],
  ["cognitocracy", "meritocracy"],
  ["Chambers choose the most efficient fix, not an ideologically pure one."],
  [global],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  6,
  "constant_deterrence",
  "Constant deterrence",
  governance,
  "Active, transparent guarding against centralization; emphasizes direct participation and active quorum.",
  [
    "Governors must actively seek and mitigate centralization threats and avoid excessive delegation.",
    "Requires transparent state visibility and active quorum: only active governors counted."
  ],
  [principle, governance, deterrence, decentralization],
  ["active_quorum", "delegation", "cognitocracy"],
  ["Governors monitor system state and vote directly to deter collusion."],
  [global, chamber, pool],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  7,
  "power_detachment_resilience",
  "Power detachment resilience",
  governance,
  "Minimizes gap between validation power and governance by ensuring one-human-one-node and maximizing validator participation.",
  [
    "Addresses power concentration common in capital-based protocols.",
    "Ensures each node is an individual with equal validation power; governors are validators; seeks high validator governance participation."
  ],
  [principle, governance, decentralization, equality],
  ["human_node", "governor", "active_quorum"],
  ["Validators are individual humans; governance aims to reflect that base."],
  [global],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  8,
  "vortex_structure",
  "Vortex structure",
  governance,
  "Three-part stack: proposal pools and voting chambers (legislative), Formation (executive).",
  [
    "Vortex consists of proposal pools and voting chambers in the legislative branch, and Formation in the executive branch."
  ],
  [structure, governance, legislative, executive],
  ["proposal_pools", "voting_chambers", "formation"],
  ["Proposal pools filter; chambers vote; Formation executes."],
  [pool, chamber, formation],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Structure",
  "2025-12-04"
).

vortex_term(
  9,
  "governor",
  "Governor (cognitocrat)",
  governance,
  "Human node that meets governing requirements and participates in voting; reverts to non-governing if requirements lapse.",
  [
    "A human node who participates in voting procedures according to governing requirements.",
    "If requirements are not met, protocol converts them back to a non-governing human node automatically."
  ],
  [role, governor, voting],
  ["human_node", "delegator", "cognitocracy"],
  ["Governor status is lost if era action thresholds are not met."],
  [chamber, pool],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0/basis-of-vortex"}],
  "Basis of Vortex – Roles",
  "2025-12-04"
).

vortex_term(
  10,
  "delegator",
  "Delegator",
  governance,
  "Governor who delegates voting power to another governor.",
  [
    "A governor who decides to delegate their voting power to another governor."
  ],
  [role, delegation, governor],
  ["governor", "delegation"],
  ["Governors may delegate votes in chamber stage but not in proposal pools."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0/basis-of-vortex"}],
  "Basis of Vortex – Roles",
  "2025-12-04"
).

vortex_term(
  11,
  "proposal_pools",
  "Proposal pools",
  governance,
  "Legislative attention filter where proposals gather support before chamber voting.",
  [
    "Part of the legislative branch; proposals enter pools to gather attention before advancing to chambers."
  ],
  [pool, governance, attention],
  ["vortex_structure", "voting_chambers", "formation"],
  ["Proposals must clear attention thresholds in pools to reach chambers."],
  [pool],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Structure",
  "2025-12-04"
).

vortex_term(
  12,
  "formation",
  "Formation",
  formation,
  "Executive branch for executing approved proposals, managing milestones, budget, and teams.",
  [
    "Formation belongs to the executive branch and handles execution of approved proposals.",
    "Covers milestones, budget usage, and team assembly."
  ],
  [formation, executive, milestones, budget, team],
  ["vortex_structure", "proposal_pools", "voting_chambers"],
  ["An approved chamber proposal becomes a Formation project for delivery."],
  [formation],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Structure",
  "2025-12-04"
).

% ---
% You can add a search helper later (e.g., search_terms/3) to return dicts/JSON.
