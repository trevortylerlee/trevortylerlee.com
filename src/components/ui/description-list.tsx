import clsx from "clsx";

// changed minimum width of first column to 20% from 50%
export function DescriptionList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dl">) {
  return (
    <dl
      {...props}
      className={clsx(
        className,
        "grid grid-cols-1 text-base/6 sm:grid-cols-[min(20%,theme(spacing.80))_auto] sm:text-sm/6",
      )}
    />
  );
}

export function DescriptionTerm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dt">) {
  return (
    <dt
      {...props}
      className={clsx(
        className,
        "col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500 first:border-none dark:border-white/5 dark:text-neutral-400 sm:border-t sm:border-neutral-950/5 sm:py-3 sm:dark:border-white/5",
      )}
    />
  );
}

export function DescriptionDetails({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dd">) {
  return (
    <dd
      {...props}
      className={clsx(
        className,
        "pb-3 pt-1 text-neutral-950 dark:text-white sm:border-t sm:border-neutral-950/5 sm:py-3 dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none",
      )}
    />
  );
}
