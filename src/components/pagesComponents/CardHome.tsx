import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../ui/card";

import { api } from "@/utils/api";
import { useEffect, useState } from "react";
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

type Employee = {
  id: number;
  nameEmployee: string;
  role: string;
  photo: string;
};

export const CardHome = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employee?pageNumber=0&pageQuantity=5");
        setEmployees(response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id: number) => {
    try {
      await api.delete(`/employee/${id}/delete`);

      const updatedEmployees = employees.filter(
        (employee) => employee.id !== id
      );
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error("Erro ao excluir funcionário:", error);
    }
  };

  return (
    <>
      {employees.map((employee) => (
        <Card
          key={employee.id}
          className="flex justify-between w-full max-w-md"
        >
          <div className="w-3/4 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                {employee.nameEmployee}
              </CardTitle>
              <CardDescription className="text-md">
                {employee.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-red-500 hover:bg-red-600">
                    <TrashIcon className="h-6 w-6" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Você tem certeza que deseja excluir esse funcionário?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação não poderá ser desfeita.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        handleDeleteEmployee(employee.id);
                      }}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Excluir
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button className="bg-amber-400 ml-2 hover:bg-amber-500">
                <Pencil1Icon className="h-6 w-6" />
              </Button>
            </CardContent>
          </div>
          <CardFooter className="w-1/4 flex p-2">
            <img
              src={`http://localhost:5074/api/v1/employee/${employee.id}/download`}
              alt={employee.nameEmployee}
              className="w-full h-5/6 rounded-md object-cover"
            />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
