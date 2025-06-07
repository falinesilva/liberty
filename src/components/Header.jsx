import AppConfig from "../constants/info";
import openMenu from "../assets/open-menu.png";
import closeMenu from "../assets/close-menu.png";
import Equity from "./Equity";
import Assets from "./Assets";

function MenuButton({ showMenu, setShowMenu }) {
  return (
    <>
      <button
        className="btn btn-menu"
        onClick={() => setShowMenu((show) => !show)}
      >
        <img
          className="menu-img"
          src={showMenu ? closeMenu : openMenu}
          width="36"
          alt="Menu Button"
        />
      </button>
    </>
  );
}

function Header({ showMenu, setShowMenu }) {
  return (
    <header className="header">
      <div>
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <Assets />
      <Equity />
    </header>
  );
}

export default Header;
