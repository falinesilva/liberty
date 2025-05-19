export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" width="36" alt="Liberty Logo" />
      </div>
      <div className="menu-icon">
        <button className="btn btn-menu">
          <img
            className="menu-img"
            src="open-menu.png"
            width="36"
            alt="Menu icon"
          />
        </button>
      </div>
    </header>
  );
}
