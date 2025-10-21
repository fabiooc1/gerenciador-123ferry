import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./components/LoginForm";

export function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card className="w-[380px]">
        <CardHeader>
          <img src="/logo.jpg" className="rounded-md" />
          <CardTitle className="text-center text-xl">
            Acesse sua conta
          </CardTitle>
          <CardDescription className="text-center">
            Faça login para começar a gerenciar as passagens de ferry.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
