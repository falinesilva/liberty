import NewRecord from "./NewRecord";
import SignInButton from "./SignInButton";

function Header({ showForm, setShowForm }) {
  return (
    <>
      <div>
        <SignInButton showForm={showForm} setShowForm={setShowForm} />
        <NewRecord showForm={showForm} setShowForm={setShowForm} />{" "}
      </div>
    </>
  );
}

export default Header;
