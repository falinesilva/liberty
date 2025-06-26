import supabase from "../supabase";

import { ReactComponent as Logo } from "../assets/Logo.svg";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({ user }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <Logo className="h-10 w-auto fill-current text-slate-50" />

        <div>{user.email}</div>

        <button className="btn-primary" onClick={signOut}>
          {user ? "Sign Out" : "Log in"}
        </button>
      </div>
    </>
  );
}

export default Header;
