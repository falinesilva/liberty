import { useState } from "react";
import supabase from "./supabase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleAuth = async () => {
    const { error } = isSignIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
    else alert(isSignIn ? "Signed in" : "Check your email to confirm");
  };

  return (
    <div>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isSignIn ? "Sign In" : "Sign Up"}</button>
      <button onClick={() => setIsSignIn(!isSignIn)}>
        Switch to {isSignIn ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
}
