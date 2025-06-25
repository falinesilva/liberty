import supabase from "../supabase";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({ user, displayName }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>{displayName}</div>

        <button className="btn-primary" onClick={signOut}>
          {user ? "Sign Out" : "Log in"}
        </button>
      </div>
    </>
  );
}

export default Header;
