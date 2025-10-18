import { cn } from "@/lib/utils";

interface HeaderProps {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  className?: string;
}

export default function Header({
  children,
  size = "md",
  className,
}: HeaderProps) {
  return (
    <h2
      className={cn(
        "font-semibold text-gray-900 tracking-tight",
        size === "lg"
          ? "text-3xl mb-6 font-bold"
          : size === "md"
          ? "text-2xl mb-4"
          : "text-xl mb-5",
        className
      )}
    >
      {children}
    </h2>
  );
}
