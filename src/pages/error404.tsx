import { Button } from "../components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const Error404 = () => {
  return (
    <div className="bg-slate-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-red-400">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-slate-500 mt-4">
          Página não encontrada
        </p>
        <p className="text-slate-500 mt-4 pb-4 border-b-2 text-center">
          Desculpe, a página que você procura não foi encontrada.
        </p>
        <a className="mt-2" href="/">
          <Button className="bg-slate-500 hover:bg-slate-600">
            <ArrowLeftIcon className="mr-2" />
            Voltar para página inicial
          </Button>
        </a>
      </div>
    </div>
  );
};
