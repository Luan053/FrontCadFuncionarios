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
              <Button className="bg-red-500 hover:bg-red-600">
                <TrashIcon className="h-6 w-6" />
              </Button>
              <Button className="bg-amber-400 ml-2 hover:bg-amber-500">
                <Pencil1Icon className="h-6 w-6" />
              </Button>
            </CardContent>
          </div>
          <CardFooter className="w-1/4 flex p-2">
            <img
              src={`https://localhost:7053/api/v1/employee${employee.photo}`}
              alt={employee.nameEmployee}
              className="w-full h-5/6 rounded-md object-cover"
            />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
