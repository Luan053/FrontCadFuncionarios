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

import AnimeVPNG from "@/assets/AnimeVPNG.png";

export const CardHome = () => {
  return (
    <Card className="flex justify-between w-full max-w-md">
      <div className="w-3/4 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tighter">
            Nome do Funcionário
          </CardTitle>
          <CardDescription className="text-md">Role</CardDescription>
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
          src={AnimeVPNG}
          alt="Funcionário"
          className="w-full h-5/6 rounded-md object-cover"
        />
      </CardFooter>
    </Card>
  );
};
