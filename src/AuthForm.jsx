import { useState } from "react";
import supabase from "./supabase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleAuth = async (e) => {
    e.preventDefault();
    const { error } = isSignIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
    else alert(isSignIn ? "Signed in" : "Check your email to confirm");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-lg p-6 gap-4 bg-neutral-800 rounded-lg shadow-md">
        <h1 className="text-center text-3xl p-4 mb-4">Welcome back</h1>
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
        <div>
          <button className="btn-primary w-full" onClick={handleAuth}>
            {isSignIn ? "Continue" : "Sign up"}
          </button>
          <br />
          <span className="flex justify-center hover:text- text-stone-50">
            Don't have an account?&nbsp;
            <button
              className="text-lime-400 hover:text-lime-600 hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsSignIn(!isSignIn);
              }}
            >
              {isSignIn ? "Sign up" : "Continue"}
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
