import openMenu from "../assets/open-menu.png";
import closeMenu from "../assets/close-menu.png";

function Header({ showMenu, setShowMenu }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" width="36" alt="Liberty Logo" />
      </div>
      <div className="menu-icon">
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
      </div>
    </header>
  );
}

export default Header;
