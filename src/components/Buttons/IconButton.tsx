import { cn } from "@/lib/utils";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ButtonProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode;
  className?: string;
  toltip?: string;
  href?: string;
}

const IconButton = ({
  href,
  icon,
  toltip,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          {...props}
          className={cn(
            "w-10 aspect-square rounded-full flex-center border-2 text-xl text-neutral-400 hover:bg-teal-500 hover:text-white transition",
            className
          )}
        >
          {href ? <Link href={href}>{icon}</Link> : icon}
        </button>
      </TooltipTrigger>
      {toltip && (
        <TooltipContent side="top" className="text-xs font-medium">
          {toltip}
        </TooltipContent>
      )}
    </Tooltip>
  );
};
export default IconButton;
