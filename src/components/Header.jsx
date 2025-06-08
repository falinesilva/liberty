import Assets from "./Assets";
import Losses from "./Losses";
import Equity from "./Equity";

function Header({ showMenu, setShowMenu }) {
  return (
    <>
      <div className="header">
        <Assets />
        <Losses />
        <Equity />
      </div>
    </>
  );
}

export default Header;
