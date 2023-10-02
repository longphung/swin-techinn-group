"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import classes from "./Login.module.css";
import Button from "../Button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Login = () => {
  const params = useSearchParams();
  const message = params.get("message");
  const supabase = createClientComponentClient();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    startTransition(() => router.push("/admin"));
    startTransition(() => router.refresh());
  };

  return (
    <div className={classes.loginContainer}>
      <h1>Sign in</h1>
      {message === "register-success" && (
        <p className={classes.successMessage}>
          Registration successful. A confirmation email has been sent to your
          inbox
        </p>
      )}
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <div className={classes.forgotPasswordRow}>
          <div className={classes.rememberMe}>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>

        <Button variant="small" type="submit">
          Login
        </Button>
        <Button as={Link} variant="small" href="/register" type="url">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
