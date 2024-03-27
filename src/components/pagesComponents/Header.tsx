import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        "w-full h-[76px] bg-slate-800 flex items-center justify-between p-4",
        className
      )}
      {...props}
    >
      <h1 className="text-white text-2xl font-bold tracking-tighter">
        Logo Sistema
      </h1>
      <div className="flex gap-2">{children}</div>
    </header>
  );
};
