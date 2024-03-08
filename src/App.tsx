import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="exemplo@gmail.com" />
        </CardContent>
        <CardFooter>
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
