import { cn } from "@/lib/utils";

function Input({ className, type, prefix, suffix, ...props }) {
  return (
    <div className="relative flex h-7 w-auto items-center rounded-lg">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "peer flex h-7 w-fit min-w-[160px] rounded-lg border border-input/0 bg-foreground/5 px-2 py-1 text-sm outline-none transition-all selection:bg-foreground/10 selection:text-foreground placeholder:text-foreground/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-ring/40 focus-visible:ring-[2px] focus-visible:ring-ring/20",
          prefix && "pl-7",
          suffix && "pr-9",
          className,
        )}
        {...props}
      />

      {prefix && (
        <div className="absolute left-2 text-foreground/20 text-sm transition-all peer-focus-visible:text-foreground peer-disabled:pointer-events-none peer-disabled:opacity-50 [&_svg]:size-4">
          {prefix}
        </div>
      )}

      {suffix && (
        <div className="absolute right-2 text-foreground/20 text-sm transition-all peer-disabled:pointer-events-none peer-disabled:opacity-50 [&_svg]:size-4">
          {suffix}
        </div>
      )}
    </div>
  );
}

export { Input };
