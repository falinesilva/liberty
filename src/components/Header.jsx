import NewRecord from "./NewRecord";
import logo from "./../assets/logo.png";
import supabase from "../supabase";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({ user, setUser, showRecordForm, setShowRecordForm }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Liberty Logo" className="h-12 w-auto" />
        <NewRecord
          showRecordForm={showRecordForm}
          setShowRecordForm={setShowRecordForm}
        />
        <button className="btn-primary" onClick={signOut}>
          {user ? "Sign Out" : "Log in"}
        </button>
      </div>
    </>
  );
}

export default Header;
