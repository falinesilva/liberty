function Results({ records }) {
  let totalAssets = records
    .filter((r) => r.status === "Asset")
    .reduce((sum, r) => sum + r.value, 0);

  let totalLiabilities = records
    .filter((r) => r.status === "Liability")
    .reduce((sum, r) => sum + r.value, 0);

  let totalNetWorth = totalAssets - totalLiabilities;

  return (
    // TODO: Refactor repeated logic into a reusable <Results /> component.
    <>
      <div className="flex justify-center columns-3 gap-5 m-4">
        <div className="text-center bg-slate-900 text-slate-50 p-4 items-center rounded-2xl">
          Assets
          <br />
          <span className="font-medium text-blue-400">
            $ +{totalAssets.toLocaleString()}
          </span>
        </div>
        <div className="text-center bg-slate-900 text-slate-50 p-4 items-center rounded-2xl">
          Liabilities
          <span className="text-red-400 font-medium">
            <br />$ -{totalLiabilities.toLocaleString()}
          </span>
        </div>
        <div className="text-center text-xl bg-slate-900 text-slate-50 p-4 items-center rounded-2xl">
          Net Worth
          <br />
          <span
            className={`font-bold ${
              totalNetWorth > 0 ? "text-amber-200" : "text-red-400"
            }`}
          >
            $ {totalNetWorth.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
}
export default Results;
