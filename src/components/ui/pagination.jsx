import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLineLeftIcon,
  ArrowLineRightIcon,
  MoreHorizontalIcon,
} from "../icons";

function Pagination({ className, ...props }) {
  return (
    <nav
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "secondary" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, size = "icon", ...props }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size={size}
      className={cn("", className)}
      {...props}
    >
      <ArrowLineLeftIcon />
      <span className="hidden">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, size = "icon", ...props }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size={size}
      className={cn("", className)}
      {...props}
    >
      <span className="hidden">Next</span>
      <ArrowLineRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
