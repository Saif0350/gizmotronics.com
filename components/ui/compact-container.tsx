import * as React from "react";
import { cn } from "../lib/utils";

export type CompactContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function CompactContainer({
  className,
  ...props
}: CompactContainerProps) {
  return (
    <div
      className={cn(
        "relative max-w-[1400px] mx-auto w-full px-[5vw] lg:px-[4vw]",
        className,
      )}
      {...props}
    />
  );
}
