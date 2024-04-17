import { CardHome } from "@/components/pagesComponents/CardHome";
import { Header } from "@/components/pagesComponents/Header";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 bg-slate-200 overflow-x-hidden">
      <Header />
      <div className="flex p-4 gap-3 flex-wrap">
        <CardHome />
      </div>
    </div>
  );
};
