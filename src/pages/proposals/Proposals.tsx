import { useMemo, useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { SearchBar } from "@/components/SearchBar";
import { AppPage } from "@/components/AppPage";
import { ExpandableCard } from "@/components/ExpandableCard";
import { StageDataTile } from "@/components/StageDataTile";
import { DashedStatItem } from "@/components/DashedStatItem";
import { StageChip } from "@/components/StageChip";
import type { ProposalStage } from "@/types/stages";
import { CardActionsRow } from "@/components/CardActionsRow";
import { Kicker } from "@/components/Kicker";
import { proposals as proposalData } from "@/data/mock/proposals";

type Stage = ProposalStage;

const stageToChipKind: Record<Stage, Parameters<typeof StageChip>[0]["kind"]> =
  {
    pool: "proposal_pool",
    vote: "chamber_vote",
    build: "formation",
    final: "final",
    archived: "archived",
  };

const Proposals: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [stageFilter, setStageFilter] = useState<Stage | "any">("any");
  const [chamberFilter, setChamberFilter] = useState("All chambers");
  const [sortBy, setSortBy] = useState<
    "Newest" | "Oldest" | "Activity" | "Votes"
  >("Newest");

  const filteredProposals = useMemo(() => {
    const term = search.trim().toLowerCase();

    return proposalData
      .filter((proposal) => {
        const matchesTerm = term
          ? proposal.title.toLowerCase().includes(term) ||
            proposal.summary.toLowerCase().includes(term) ||
            proposal.meta.toLowerCase().includes(term) ||
            proposal.keywords.some((keyword) =>
              keyword.toLowerCase().includes(term),
            )
          : true;
        const matchesStage =
          stageFilter === "any" ? true : proposal.stage === stageFilter;
        const matchesChamber =
          chamberFilter === "All chambers"
            ? true
            : proposal.chamber === chamberFilter;
        return matchesTerm && matchesStage && matchesChamber;
      })
      .sort((a, b) => {
        if (sortBy === "Newest") {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        if (sortBy === "Oldest") {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (sortBy === "Activity") {
          return b.activityScore - a.activityScore;
        }
        if (sortBy === "Votes") {
          return b.votes - a.votes;
        }
        return 0;
      });
  }, [search, stageFilter, chamberFilter, sortBy]);

  const filtersContent = (
    <div className="space-y-3">
      <div className="space-y-1">
        <Kicker>Status</Kicker>
        <Select
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value as Stage | "any")}
        >
          <option value="any">Any</option>
          <option value="pool">Proposal pool</option>
          <option value="vote">Chamber vote</option>
          <option value="build">Formation</option>
          <option value="final">Final vote</option>
          <option value="archived">Archived</option>
        </Select>
      </div>
      <div className="space-y-1">
        <Kicker>Chamber</Kicker>
        <Select
          value={chamberFilter}
          onChange={(e) => setChamberFilter(e.target.value)}
        >
          <option value="All chambers">All chambers</option>
          <option value="Protocol Engineering">Protocol Engineering</option>
          <option value="Economics & Treasury">Economics & Treasury</option>
          <option value="Security & Infra">Security & Infra</option>
          <option value="Constitutional">Constitutional</option>
          <option value="Social Impact">Social Impact</option>
        </Select>
      </div>
      <div className="space-y-1">
        <Kicker>Sort by</Kicker>
        <Select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as "Newest" | "Oldest" | "Activity" | "Votes",
            )
          }
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Activity">Activity</option>
          <option value="Votes">Votes casted</option>
        </Select>
      </div>
    </div>
  );

  const toggleProposal = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <AppPage pageId="proposals">
      <div className="flex justify-between gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="rounded-full px-4"
        >
          <Link to="/proposals/drafts">Drafts</Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full px-4">
            <Link to="/proposals/new">Create proposal</Link>
          </Button>
        </div>
      </div>

      <SearchBar
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search proposals by title, hash, proposer…"
        ariaLabel="Search proposals"
        filtersContent={filtersContent}
      />

      <section aria-live="polite" className="flex flex-col gap-4">
        {filteredProposals.length === 0 && (
          <Card className="border-dashed px-5 py-6 text-center text-sm text-muted">
            No proposals match the current search.
          </Card>
        )}

        {filteredProposals.map((proposal) => (
          <ExpandableCard
            key={proposal.id}
            expanded={expanded === proposal.id}
            onToggle={() => toggleProposal(proposal.id)}
            meta={proposal.meta}
            title={proposal.title}
            right={
              <>
                <StageChip kind={stageToChipKind[proposal.stage]}>
                  {proposal.stageLabel}
                </StageChip>
                <Badge
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {proposal.summaryPill}
                </Badge>
              </>
            }
          >
            <p className="text-sm text-muted">{proposal.summary}</p>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {proposal.stageData.map((item) => (
                <StageDataTile
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  value={item.value}
                  tone={item.tone}
                />
              ))}
            </div>

            <ul className="grid gap-2 text-sm text-text md:grid-cols-2">
              {proposal.stats.map((stat) => (
                <DashedStatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </ul>

            <CardActionsRow
              proposer={proposal.proposer}
              proposerId={proposal.proposerId}
              primaryHref={
                proposal.stage === "pool"
                  ? `/proposals/${proposal.id}/pp`
                  : proposal.stage === "vote"
                    ? `/proposals/${proposal.id}/chamber`
                    : proposal.stage === "build"
                      ? `/proposals/${proposal.id}/formation`
                      : `/proposals/${proposal.id}/pp`
              }
              primaryLabel={proposal.ctaPrimary}
              secondaryLabel={proposal.ctaSecondary}
              secondaryVariant="ghost"
            />
          </ExpandableCard>
        ))}
      </section>
    </AppPage>
  );
};

export default Proposals;
