import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type LoginFormData } from "./loginFormSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { authService } from "@/services/authService";

export function LoginForm() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    values: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate()

  async function onLoginFormSubmit(data: LoginFormData) {
    try {
      setIsSubmittingForm(true);
      await authService.login({
        login: data.email,
        senha: data.password
      })
      
      navigate('/dashboard')
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error("Credenciais inválidas")
      }

      toast.error(error.message)
    } finally {
      setIsSubmittingForm(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(onLoginFormSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Seu email" {...field} />
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
              <div className="flex justify-between items-center">
                <FormLabel>Senha</FormLabel>
                <Link
                  to="/forgot-password"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <FormControl>
                <Input type="password" placeholder="Sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmittingForm}>
          Entrar
        </Button>
      </form>
    </Form>
  );
}
