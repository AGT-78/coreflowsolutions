import { cn } from "@/lib/utils";

export function TypographyH1({ children, className, ...props }) {
  return (
    <h1 
      className={cn(
        "scroll-m-20 font-extrabold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
  