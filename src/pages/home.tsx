import { CardHome } from "@/components/pagesComponents/CardHome";
import { Header } from "@/components/pagesComponents/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, PlusIcon, ExitIcon } from "@radix-ui/react-icons";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 bg-slate-200">
      <Header>
        <div className="flex gap-1">
          <Input
            placeholder="Buscar Funcionário"
            className="text-white border-none bg-slate-700"
            required
          />
          <Button
            type="submit"
            className="text-white bg-sky-500 p-2 rounded-sm hover:bg-sky-600"
          >
            <MagnifyingGlassIcon className="h-8 w-8" />
          </Button>
        </div>
        <Button className="text-white bg-emerald-500 p-2 rounded-sm hover:bg-emerald-600">
          <PlusIcon className="h-8 w-8" />
        </Button>
        <Button className="text-white bg-red-500 p-2 rounded-sm ml-4 hover:bg-red-600">
          <ExitIcon className="h-8 w-8" />
        </Button>
      </Header>
      <div className="flex p-4 gap-4 flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardHome key={index} />
        ))}
      </div>
    </div>
  );
};
