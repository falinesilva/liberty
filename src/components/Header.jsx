import supabase from "../supabase";

import { ReactComponent as LogoSmall } from "../assets/LogoSmall.svg";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({ user, displayName }) {
  return (
    // TODO: Add title and alt to SVG logo for accessibility
    <>
      <div className="m-4 flex justify-between items-center text-xl">
        <LogoSmall className="m-2 h-12 w-auto fill-current" />

        <div className="m-4 text-xl">
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
