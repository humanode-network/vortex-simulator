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

vortex_term(
  13,
  "technocracy",
  "Technocracy",
  governance,
  "Decision-makers selected by technological knowledge; cognitocracy inherits innovation focus but rejects plutocratic traits.",
  [
    "Centers decision-making on technological expertise and innovation.",
    "Criticized for elitism via capital control; cognitocracy keeps innovation focus but discards plutocratic concentration."
  ],
  [principle, governance, technology, innovation],
  ["cognitocracy", "meritocracy"],
  ["Cognitocracy borrows the innovation drive of technocracy without the plutocratic tilt."],
  [global],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  14,
  "intellectual_barrier",
  "Intellectual barrier for voting rights",
  governance,
  "Voting rights granted through demonstrated expertise and deployable proposals, not formal diplomas.",
  [
    "Introduces on-the-spot proof of expertise via proposals instead of third-party credentials.",
    "Aims to separate power from popularity and formal degrees."
  ],
  [principle, governance, qualification, expertise],
  ["cognitocracy", "meritocracy"],
  ["Governors earn voting rights by proving deployable innovation in their field."],
  [global, chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  15,
  "direct_democracy",
  "Direct democracy",
  governance,
  "Cognitocrats vote directly on issues without intermediaries to keep decisions aligned with active participants.",
  [
    "Relies on direct participation of cognitocrats for decisions.",
    "Keeps power with active governors rather than intermediaries."
  ],
  [principle, governance, democracy, delegation],
  ["representative_democracy", "liquid_democracy", "cognitocracy"],
  ["Cognitocrats vote directly in chambers to reflect active will."],
  [global, chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  16,
  "representative_democracy",
  "Representative democracy",
  governance,
  "Delegation to representatives for flexibility; in cognitocracy, only cognitocrats may delegate to other cognitocrats.",
  [
    "Allows targeted delegation when direct participation is not feasible.",
    "Seeks reduced polarization via issue-specific representation."
  ],
  [principle, governance, democracy, delegation],
  ["direct_democracy", "liquid_democracy", "cognitocracy", "delegator"],
  ["Cognitocrats may delegate votes per issue to stay responsive."],
  [global, chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  17,
  "liquid_democracy",
  "Liquid democracy (cognitocracy)",
  governance,
  "Vote delegation among cognitocrats only, retractable at any time; no elections, voice stays dynamic.",
  [
    "Cognitocrats delegate only to other cognitocrats; delegation is retractable.",
    "Reduces polarization by enabling issue-specific support; adapts to changing preferences."
  ],
  [principle, governance, delegation, liquid_democracy],
  ["direct_democracy", "representative_democracy", "cognitocracy", "delegator"],
  ["Delegated votes can be reclaimed at any moment, keeping representation aligned."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Principles",
  "2025-12-04"
).

vortex_term(
  18,
  "specialization_chamber",
  "Specialization Chamber (SC)",
  governance,
  "Chamber for a specific field; only specialists with accepted proposals in that field vote on related matters.",
  [
    "Admits governors who proved creative merit in the chamber’s field.",
    "Shards legislation to maintain professionalism and efficiency.",
    "Invariant: 1 governor-cognitocrat = 1 vote."
  ],
  [chamber, specialization, governance],
  ["general_chamber", "vortex_structure"],
  ["Programming chamber admits engineers whose proposals were accepted."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Chambers",
  "2025-12-04"
).

vortex_term(
  19,
  "general_chamber",
  "General Chamber (GC)",
  governance,
  "Chamber comprising all cognitocrats; its rulings supersede SCs and can force admittance of proposals.",
  [
    "Includes all cognitocrat-governors regardless of specialization.",
    "Acts on system-wide proposals; can enforce acceptance of proposals declined in SCs.",
    "Harder to reach quorum than SCs."
  ],
  [chamber, general, governance],
  ["specialization_chamber"],
  ["GC can override an SC by accepting a repeatedly declined proposal."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Chambers",
  "2025-12-04"
).

vortex_term(
  20,
  "chamber_inception",
  "Chamber inception",
  governance,
  "Process to create a Specialization Chamber: proposed and voted by existing cognitocrats; initial members nominated; CM approach chosen.",
  [
    "Only an established governor-cognitocrat can propose forming an SC.",
    "Initial cognitocrats are nominated; Cognitocratic Measure approach is chosen at creation."
  ],
  [process, chamber, governance],
  ["specialization_chamber", "cognitocratic_measure"],
  ["Formation of a new SC requires a proposal, vote, nominations, and CM setup."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Chambers",
  "2025-12-04"
).

vortex_term(
  21,
  "chamber_dissolution",
  "Chamber dissolution",
  governance,
  "Ending an SC via SC or GC proposal; GC censure excludes targeted SC members from quorum.",
  [
    "Can be proposed inside the SC or in the GC.",
    "GC vote of censure excludes members of the targeted SC from quorum and voting.",
    "Penalties are contextual to the dissolution cause."
  ],
  [process, chamber, governance],
  ["specialization_chamber", "general_chamber"],
  ["GC censure dissolves a corrupt SC; targeted members don’t count toward quorum."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Basis of Vortex – Chambers",
  "2025-12-04"
).

vortex_term(
  22,
  "quorum_of_attention",
  "Quorum of attention",
  governance,
  "Proposal-pool quorum: 22% of active governors engaged AND at least 10% upvotes to advance to a chamber.",
  [
    "Applied in every proposal pool.",
    "Proposal advances when ≥22% of active governors engage and ≥10% of them upvote.",
    "Delegated votes do NOT count in proposal pools."
  ],
  [quorum, pool, governance, attention],
  ["proposal_pools", "quorum_of_vote", "delegation_policy"],
  ["A pool item with 24% engagement and 14% upvotes moves to chamber voting."],
  [pool],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Voting, Delegation and Quorum",
  "2025-12-04"
).

vortex_term(
  23,
  "quorum_of_vote",
  "Quorum of vote",
  governance,
  "Chamber quorum: 33.3% participation; passing rule 66.6% + 1 yes within the quorum (≈22% of all active governors).",
  [
    "Chamber quorum is reached at 33.3% of active governors voting.",
    "Passing rule: 66.6% + 1 yes within the quorum (≈22% of active governors).",
    "Non-governing human nodes are not counted in quorum.",
    "Pulled-from-pool proposals get one week to be voted in chamber."
  ],
  [quorum, chamber, governance, voting],
  ["quorum_of_attention", "delegation_policy", "veto_rights"],
  ["A chamber vote with 35% turnout passes if 67% yes within that turnout."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Voting, Delegation and Quorum",
  "2025-12-04"
).

vortex_term(
  24,
  "delegation_policy",
  "Delegation and quorum policy",
  governance,
  "Counts only active governors for quorum, while allowing non-active cognitocrats to delegate to active ones in the same chamber.",
  [
    "Only active governors count toward quorum.",
    "Non-active cognitocrats may delegate to an active cognitocrat in the same chamber.",
    "Balances elitism of active-only voting with broader delegated input."
  ],
  [delegation, quorum, governance],
  ["quorum_of_vote", "quorum_of_attention", "liquid_democracy"],
  ["Non-active members delegate to active ones; delegated votes count in chamber stage, not in pools."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Voting, Delegation and Quorum",
  "2025-12-04"
).

vortex_term(
  25,
  "veto_rights",
  "Veto rights",
  governance,
  "Temporary, breakable veto held by Citizens; 66.6% + 1 veto sends a proposal back for two weeks (max twice).",
  [
    "Veto power is distributed to all Citizens.",
    "If 66.6% + 1 veto, the proposal returns for 2 weeks; can be vetoed twice; third approval cannot be vetoed.",
    "Acts as deterrence against majority mistakes or attacks."
  ],
  [veto, governance, deterrence, lcm],
  ["quorum_of_vote", "constant_deterrence"],
  ["If vetoed twice, a third approval is final with no further veto allowed."],
  [chamber],
  [link{label:"Docs", url:"https://gitbook.humanode.io/vortex-1.0"}],
  "Voting, Delegation and Quorum",
  "2025-12-04"
).

% ---
% You can add a search helper later (e.g., search_terms/3) to return dicts/JSON.
