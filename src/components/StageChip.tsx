import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { HintLabel } from "@/components/Hint";
import type { StageChipKind } from "@/types/stages";

const chipClasses: Record<StageChipKind, string> = {
  proposal_pool: "bg-[color:var(--accent-warm)]/15 text-[var(--accent-warm)]",
  chamber_vote: "bg-[color:var(--accent)]/15 text-[var(--accent)]",
  formation: "bg-[color:var(--primary)]/12 text-primary",
  thread: "bg-panel-alt text-muted",
  courts: "bg-[color:var(--accent-warm)]/15 text-[var(--accent-warm)]",
  faction: "bg-panel-alt text-muted",
  final: "bg-[color:var(--accent)]/15 text-[var(--accent)]",
  archived: "bg-panel-alt text-muted",
};

const hintByKind: Partial<Record<StageChipKind, string>> = {
  proposal_pool: "proposal_pools",
  chamber_vote: "chamber_vote",
  formation: "formation",
};

type StageChipProps = {
  kind: StageChipKind;
  children: ReactNode;
  className?: string;
};

export function StageChip({ kind, children, className }: StageChipProps) {
  const termId = hintByKind[kind];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        chipClasses[kind],
        className,
      )}
    >
      {termId ? <HintLabel termId={termId}>{children}</HintLabel> : children}
    </span>
  );
}

export default StageChip;
