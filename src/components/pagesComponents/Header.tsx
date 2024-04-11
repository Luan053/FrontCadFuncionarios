import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon, PlusIcon, ExitIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { api } from "@/utils/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "../ui/label";

type HeaderProps = React.HTMLAttributes<HTMLElement>;

interface Employee {
  Name: string;
  Role: string;
  Photo: File | null;
}

export const Header = ({ children, className, ...props }: HeaderProps) => {
  const [employeeData, setEmployeeData] = useState<Employee>({
    Name: "",
    Role: "",
    Photo: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, files } = e.target;
    if (name === "Photo" && files) {
      setEmployeeData((prevData) => ({
        ...prevData,
        Photo: files[0],
      }));
    } else {
      setEmployeeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("Name", employeeData.Name);
      formData.append("Role", employeeData.Role);
      if (employeeData.Photo) {
        formData.append("Photo", employeeData.Photo);
      }
      await api.post("/employee", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Funcionário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar funcionário:", error);
    }
  };

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
      <div className="flex gap-2">
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-white bg-emerald-500 p-2 rounded-sm hover:bg-emerald-600">
              <PlusIcon className="h-8 w-8" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Criar</DialogTitle>
              <DialogDescription>
                Crie um novo funcionário preenchendo as informações abaixo
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="Name">Name</Label>
                <Input
                  type="text"
                  id="Name"
                  name="Name"
                  value={employeeData.Name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="Role">Role</Label>
                <Input
                  type="text"
                  id="Role"
                  name="Role"
                  value={employeeData.Role}
                  onChange={handleChange}
                />
              </div>
              <div className="pb-4">
                <Label htmlFor="Photo">Photo</Label>
                <Input
                  type="file"
                  id="Photo"
                  name="Photo"
                  onChange={handleChange}
                  accept="image/*"
                />
              </div>
              <Button type="submit">Criar Funcionário</Button>
            </form>
          </DialogContent>
        </Dialog>

        <Button className="text-white bg-red-500 p-2 rounded-sm ml-4 hover:bg-red-600">
          <ExitIcon className="h-8 w-8" />
        </Button>
      </div>
    </header>
  );
};
