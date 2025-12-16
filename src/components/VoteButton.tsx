import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type VoteButtonTone = "accent" | "destructive" | "neutral";
export type VoteButtonSize = "sm" | "lg";

type VoteButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  tone: VoteButtonTone;
  label: ReactNode;
  icon?: ReactNode;
  size?: VoteButtonSize;
};

const baseClasses =
  "rounded-full border-2 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const sizeClasses: Record<VoteButtonSize, string> = {
  sm: "min-w-[140px] px-6 py-2 text-sm",
  lg: "flex min-w-[220px] items-center justify-center gap-3 px-12 py-6 text-2xl leading-none",
};

const toneClasses: Record<VoteButtonTone, string> = {
  accent:
    "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
  destructive:
    "border-[var(--destructive)] text-[var(--destructive)] hover:bg-[var(--destructive)] hover:text-[var(--destructive-foreground)]",
  neutral: "border-border text-muted hover:bg-panel hover:text-text",
};

export function VoteButton({
  tone,
  label,
  icon,
  size = "sm",
  className,
  ...props
}: VoteButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        baseClasses,
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {icon ? (
        <span className={size === "lg" ? "text-2xl leading-none" : ""}>
          {icon}
        </span>
      ) : null}
      <span className={size === "lg" ? "text-2xl leading-none" : ""}>
        {label}
      </span>
    </button>
  );
}

export default VoteButton;
