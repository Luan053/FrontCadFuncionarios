import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Autoplay from "embla-carousel-autoplay";

import meeting from "../assets/meeting.svg";
import meetingFinances from "../assets/meetingFinances.svg";
import leaveJob from "../assets/leaveJob.svg";
import React from "react";

export const SignIn = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  return (
    <main className="w-full h-screen flex">
      <div className="bg-primary w-full h-full flex items-center justify-center p-16 hidden md:flex">
        <Carousel className="w-full max-w-xl" plugins={[plugin.current]}>
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-slate-800 rounded-xl p-8">
                <img src={meeting} alt="Reunião de funcionários" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img
                  src={meetingFinances}
                  alt="Reunião de funcionários envolvendo finanças"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-slate-800 rounded p-8">
                <img src={leaveJob} alt="Saindo do trabalho" />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
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
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="email" placeholder="******" />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex items-center gap-16 mt-4">
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
              Ao entrar em nossa plataforma você concorda com nossos Termos de
              Uso e Políticas de Privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};
