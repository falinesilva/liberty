import React from "react";

function Header({ showMenu, setShowMenu }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" width="36" alt="Liberty Logo" />
      </div>
      <div className="menu-icon">
        <button
          className="btn btn-menu"
          onClick={() => setShowMenu((show) => !show)}
        >
          <img
            className="menu-img"
            src={showMenu ? "close-menu.png" : "open-menu.png"}
            width="36"
            alt="Menu Button"
          />
        </button>
      </div>
    </header>
  );
}
export default Header;
