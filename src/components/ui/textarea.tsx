import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-white p-2 h-28 border rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
