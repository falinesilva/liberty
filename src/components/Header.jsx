function Header() {
  let totalAssets = 0;
  let totalLosses = 0;
  let totalEquity = 0;

  return (
    <div className="stats">
      Assets: {totalAssets}
      Losses: {totalLosses}
      Assets: {totalEquity}
    </div>
  );
}

export default Header;
