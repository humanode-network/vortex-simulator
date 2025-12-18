import { Link, useParams } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card";
import { Button } from "@/components/primitives/button";
import { cn } from "@/lib/utils";
import ProposalStageBar from "@/components/ProposalStageBar";
import { Surface } from "@/components/Surface";
import { StatTile } from "@/components/StatTile";
import { PageHint } from "@/components/PageHint";
import { AttachmentList } from "@/components/AttachmentList";
import { VoteButton } from "@/components/VoteButton";
import { TitledSurface } from "@/components/TitledSurface";
import { getChamberProposalPage } from "@/data/mock/proposalPages";

const ProposalChamber: React.FC = () => {
  const { id } = useParams();
  const proposal = getChamberProposalPage(id);

  const yesTotal = proposal.votes.yes;
  const noTotal = proposal.votes.no;
  const abstainTotal = proposal.votes.abstain;
  const engaged = proposal.engagedGovernors;
  const quorumNeeded = Math.ceil(
    proposal.activeGovernors * proposal.attentionQuorum,
  );
  const quorumPercent = Math.round((engaged / proposal.activeGovernors) * 100);
  const yesPercentOfQuorum =
    engaged > 0 ? Math.round((yesTotal / engaged) * 100) : 0;

  const renderStageBar = (
    current: "draft" | "pool" | "chamber" | "formation",
  ) => <ProposalStageBar current={current} />;

  return (
    <div className="flex flex-col gap-6">
      <PageHint pageId="proposals" />
      <Surface
        as="section"
        variant="panel"
        radius="2xl"
        shadow="card"
        className="p-6"
      >
        <div className="grid gap-4">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-text">
              {proposal.title}
            </h1>
            {renderStageBar("chamber")}
            <div className="grid gap-3 sm:grid-cols-2">
              <StatTile
                label="Chamber"
                value={proposal.chamber}
                radius="2xl"
                className="px-4 py-4"
                labelClassName="text-[0.8rem]"
                valueClassName="text-2xl"
              />
              <StatTile
                label="Proposer"
                value={proposal.proposer}
                radius="2xl"
                className="px-4 py-4"
                labelClassName="text-[0.8rem]"
                valueClassName="text-2xl"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <VoteButton tone="accent" label="Vote yes" />
              <VoteButton tone="destructive" label="Vote no" />
              <VoteButton tone="neutral" label="Abstain" />
            </div>
          </div>

          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle>Voting quorum</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-text sm:grid-cols-2 lg:grid-cols-4">
              <StatTile
                label="Governors"
                value={
                  <>
                    {engaged} / {quorumNeeded}
                  </>
                }
                variant="panel"
                className="flex min-h-24 flex-col items-center justify-center gap-1 py-4"
                valueClassName="text-2xl font-semibold whitespace-nowrap"
              />
              <StatTile
                label="Yes / No / Abstain"
                value={
                  <>
                    {yesTotal} / {noTotal} / {abstainTotal}
                  </>
                }
                variant="panel"
                className="flex min-h-24 flex-col items-center justify-center gap-1 py-4"
                labelClassName="whitespace-nowrap"
                valueClassName="text-2xl font-semibold whitespace-nowrap"
              />
              <StatTile
                label="Quorum (%)"
                value={quorumPercent}
                variant="panel"
                className="flex min-h-24 flex-col items-center justify-center gap-1 py-4"
                labelClassName="whitespace-nowrap"
                valueClassName="text-2xl font-semibold whitespace-nowrap"
              />
              <StatTile
                label="Passing"
                value={`${yesPercentOfQuorum}% yes`}
                variant="panel"
                className="flex min-h-24 flex-col items-center justify-center gap-1 py-4"
                valueClassName="text-2xl font-semibold whitespace-nowrap"
              />
            </CardContent>
          </Card>
        </div>
      </Surface>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted">
          <p>{proposal.summary}</p>
          <div className="grid gap-2 text-sm text-text sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Budget ask", value: proposal.budget },
              { label: "Impact", value: proposal.impact },
              { label: "Time left", value: proposal.timeLeft },
              { label: "Passing rule", value: proposal.passingRule },
            ].map((item) => (
              <StatTile
                key={item.label}
                label={item.label}
                value={item.value}
                className="px-3 py-2"
              />
            ))}
          </div>
          <div className="space-y-4 text-text">
            <TitledSurface title="Proposal overview">
              <p className="text-sm leading-relaxed text-muted">
                {proposal.overview}
              </p>
            </TitledSurface>
            <TitledSurface title="Execution plan">
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {proposal.executionPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TitledSurface>
            <TitledSurface title="Budget & scope">
              <p className="text-sm text-muted">{proposal.budgetScope}</p>
            </TitledSurface>
            <AttachmentList items={proposal.attachments} />
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="space-y-3 pt-4">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Voting quorum",
                description: "Strict 33% active governors",
                value: `${engaged >= quorumNeeded ? "Met" : "Pending"} · ${quorumPercent}%`,
                tone: engaged >= quorumNeeded ? "ok" : "warn",
              },
              {
                title: "Passing rule",
                description: "≥66.6% + 1 yes",
                value: `Current ${yesPercentOfQuorum}% yes`,
                tone: yesPercentOfQuorum >= 67 ? "ok" : "warn",
              },
              {
                title: "Time left",
                description: "Voting window",
                value: proposal.timeLeft,
              },
            ].map((entry) => (
              <Surface
                key={entry.title}
                variant="panelAlt"
                radius="xl"
                shadow="tile"
                className="p-4"
              >
                <p className="text-sm font-semibold text-muted">
                  {entry.title}
                </p>
                <p className="text-xs text-muted">{entry.description}</p>
                <p
                  className={cn(
                    "text-lg font-semibold text-text",
                    entry.tone === "ok" && "text-[var(--accent)]",
                    entry.tone === "warn" && "text-[var(--accent-warm)]",
                  )}
                >
                  {entry.value}
                </p>
              </Surface>
            ))}
          </div>

          <ul className="grid gap-2 text-sm text-text md:grid-cols-2">
            {[
              { label: "Votes casted", value: String(engaged) },
              {
                label: "Active governors",
                value: String(proposal.activeGovernors),
              },
            ].map((stat) => (
              <Surface
                key={stat.label}
                as="li"
                variant="panelAlt"
                radius="xl"
                borderStyle="dashed"
                className="px-4 py-3"
              >
                <span className="font-semibold">{stat.label}:</span>{" "}
                {stat.value}
              </Surface>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/app/human-nodes/${proposal.proposerId}`}
              className="text-sm font-semibold text-primary"
            >
              Proposer: {proposal.proposer}
            </Link>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link
                  to={`/app/proposals/${id ?? "voluntary-commitment-staking"}/chamber`}
                >
                  Open proposal
                </Link>
              </Button>
              <Button size="sm" variant="ghost">
                Track vote
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProposalChamber;
