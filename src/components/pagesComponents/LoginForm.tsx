import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";

const formSchema = z.object({
  email: z.string().email("Insira um E-mail válido"),
  password: z.string().min(6, "Senha muito curta"),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tighter">
            Entre com sua conta
          </CardTitle>
          <CardDescription>
            Utilize seu e-mail e senha ou GitHub para entrar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="exemplo@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="******"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-6 w-full" type="submit">
                Entrar
              </Button>
            </form>
          </Form>
          <div className="flex justify-center gap-16 mt-4">
            <Separator />
            <span className="text-xs text-muted-foreground">Ou</span>
            <Separator />
          </div>
          <Button variant="outline" className="mt-4 w-full">
            <GitHubLogoIcon className="mr-2" /> Entrar com o GitHub
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-center text-sm">
            Ao entrar em nossa plataforma você concorda com nossos Termos de Uso
            e Políticas de Privacidade.
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
