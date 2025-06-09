function Results({ showForm, setShowForm }) {
  let totalAssets = 5000;
  let totalLosses = 2000;
  let totalEquity = 1100;
  return (
    <div className="stats">
      Assets: {totalAssets}
      Losses: {totalLosses}
      Equity: {totalEquity}
    </div>
  );
}
export default Results;
