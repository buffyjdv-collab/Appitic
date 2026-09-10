import { cn } from "@/lib/utils";

export function AppiticLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-1/2 w-1/2"
        aria-hidden="true"
      >
        {/* Stylized "A" formed by stacked app tiles */}
        <path
          d="M12 3L4 20h3.2l1.5-3.6h6.6L16.8 20H20L12 3Zm0 5.2 2.2 5.2H9.8L12 8.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
