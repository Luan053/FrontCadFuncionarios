import { CardHome } from "@/components/pagesComponents/CardHome";
import { Header } from "@/components/pagesComponents/Header";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  ExitIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 bg-slate-200">
      <Header />
      <div className="flex p-4 gap-4 flex-wrap">
        <CardHome />
      </div>
    </div>
  );
};
