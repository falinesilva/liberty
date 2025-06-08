import AddForm from "./AddForm";
import Assets from "./Assets";
import Losses from "./Losses";
import Equity from "./Equity";
import SignIn from "./SignIn";

function Header({ showMenu, setShowMenu }) {
  return (
    <>
      <div className="header">
        <AddForm showMenu={showMenu} setShowMenu={setShowMenu} />
        <Assets />
        <Losses />
        <Equity />
        <SignIn />
      </div>
    </>
  );
}

export default Header;
