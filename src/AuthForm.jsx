import { useState } from "react";
import supabase from "./supabase";

export default function AuthForm({ setShowAuthForm, showShowAuthForm }) {
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
        Welcome back
        <input
          className="form-primary"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-primary"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-start">
          <button className="btn-primary" onClick={handleAuth}>
            {isSignIn ? "Sign in" : "Create account"}
          </button>
          <span className="flex items-center text-stone-50">or</span>

          <button
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setIsSignIn(!isSignIn);
            }}
          >
            {isSignIn ? "Create account" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}
