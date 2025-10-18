import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "w-fit flex items-center gap-2 px-6 py-2 font-bold bg-teal-500 text-white rounded hover:bg-teal-600",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
