import { useState } from "react";
import { useSnackbar } from "./contexts/SnackbarContext";

import supabase from "./supabase";

import Footer from "./components/Footer";

import { ReactComponent as Logo } from "./assets/Logo.svg";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display_name, setDisplayName] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const showSnackbar = useSnackbar();

  const handleAuth = async (e) => {
    e.preventDefault();
    const { error } = isSignIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              display_name,
            },
          },
        });

    if (error) {
      let customMessage = error.message;

      if (customMessage === "Missing email or phone") {
        customMessage = "Missing email";
      } else if (customMessage === "Anonymous sign-ins are disabled") {
        customMessage = "Missing email";
      } else if (customMessage === "missing email or phone") {
        customMessage = "Missing email";
      }

      showSnackbar(customMessage);
    } else {
      showSnackbar(isSignIn ? null : "Check your email to confirm");
    }
  };

  return (
    // TODO: Add title and alt to SVG logo for accessibility

    <>
      <div className="overflow:hidden flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col w-full max-w-lg p-6 bg-slate-800 rounded-lg shadow-md">
          <Logo className="mb-4 m-auto h-16 w-auto fill-current text-slate-50" />

          <h1 className="text-center text-2xl mb-4">
            {isSignIn ? "Welcome back" : "Create your account"}
          </h1>

          {!isSignIn && (
            <input
              className="form-primary"
              placeholder="Username"
              type="username"
              id="username"
              autoComplete="username"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          )}

          <input
            className="form-primary"
            placeholder="Email address"
            type="email"
            id="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-primary"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex flex-col w-full items-center">
            <button className="btn-primary w-full" onClick={handleAuth}>
              {isSignIn ? "Log in" : "Sign up"}
            </button>

            <span className="text-slate-50 text-sm">
              {!isSignIn
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                className="text-blue-500 hover:text-blue-700 hover:cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignIn(!isSignIn);
                }}
              >
                {!isSignIn ? "Log in" : "Sign up"}
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-center">
        <Footer />
      </div>
    </>
  );
}
