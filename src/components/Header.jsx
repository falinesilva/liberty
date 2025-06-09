import NewRecord from "./NewRecord";
import SignIn from "./SignIn";

function Header({ showForm, setShowForm }) {
  return (
    <>
      <div className="header">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind is Working!
        </h1>
        <SignIn showForm={showForm} setShowForm={setShowForm} />
        <NewRecord showForm={showForm} setShowForm={setShowForm} />{" "}
      </div>
    </>
  );
}

export default Header;
