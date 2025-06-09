import NewRecord from "./NewRecord";
import SignIn from "./SignIn";

function Header({ showForm, setShowForm }) {
  return (
    <>
      <div className="header">
        <NewRecord showForm={showForm} setShowForm={setShowForm} />

        <SignIn showForm={showForm} setShowForm={setShowForm} />
      </div>
    </>
  );
}

export default Header;
