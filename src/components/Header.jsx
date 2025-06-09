import NewRecord from "./NewRecord";

function Header({ showForm, setShowForm }) {
  let totalAssets = 0;
  let totalLosses = 0;
  let totalEquity = 0;

  return (
    <>
      {showForm ? null : (
        <div className="stats">
          Assets: {totalAssets}
          Losses: {totalLosses}
          Equity: {totalEquity}
          <NewRecord showForm={showForm} setShowForm={setShowForm} />
        </div>
      )}
    </>
  );
}

export default Header;
