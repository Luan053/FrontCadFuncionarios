//pages components
import { LoginCarousel } from "@/components/pagesComponents/LoginCarousel";
import { LoginForm } from "@/components/pagesComponents/LoginForm";

export const SignIn = () => {
  return (
    <main className="w-full h-screen flex">
      <LoginCarousel />
      <LoginForm />
    </main>
  );
};
