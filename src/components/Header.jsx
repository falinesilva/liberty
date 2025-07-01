import supabase from "../supabase";

import { ReactComponent as LogoSmall } from "../assets/LogoSmall.svg";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({ user, displayName }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center text-xl text-white shadow-md z-50">
        <LogoSmall className="max-xxs:h-8 m-2 h-12 w-auto fill-current" />

        <div className="m-2 text-xl">
          {displayName}

          <button
            className="text-blue-500 uppercase text-sm m-2 hover:opacity-50 cursor-pointer"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
