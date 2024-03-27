import { CardHome } from "@/components/pagesComponents/CardHome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExitIcon, MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 bg-slate-200">
      <header className="w-full h-[76px] bg-slate-800 flex items-center justify-between p-4">
        <h1 className="text-white text-2xl font-bold tracking-tighter">
          Logo Sistema
        </h1>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <Input
              placeholder="Buscar Funcionário"
              className="text-white border-none bg-slate-700"
              required
            />
            <Button
              type="submit"
              className="text-white bg-sky-500 p-2 rounded-sm"
            >
              <MagnifyingGlassIcon className="h-8 w-8" />
            </Button>
          </div>
          <Button className="text-white bg-emerald-500 p-2 rounded-sm">
            <PlusIcon className="h-8 w-8" />
          </Button>
          <Button className="text-white bg-red-500 p-2 rounded-sm ml-4">
            <ExitIcon className="h-8 w-8" />
          </Button>
        </div>
      </header>
      <div className="flex p-4 gap-4 flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardHome key={index} />
        ))}
      </div>
    </div>
  );
};
