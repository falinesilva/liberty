function Results({ records }) {
  let totalAssets = records
    .filter((r) => r.status === "Asset")
    .reduce((sum, r) => sum + r.value, 0);

  let totalLiabilities = records
    .filter((r) => r.status === "Liability")
    .reduce((sum, r) => sum + r.value, 0);

  let totalNetWorth = totalAssets - totalLiabilities;

  return (
    <>
      <div className="flex justify-center columns-3 gap-5 m-4 max-xxs:grid max-xxs:grid-cols-1">
        <div className="result max-xxs:!hidden">
          ASSETS
          <br />
          <span className="font-medium text-blue-400 text-xl">
            $ {totalAssets.toLocaleString()}
          </span>
        </div>
        <div className="result max-xxs:!hidden">
          LIABILITIES
          <br />
          <span className="text-red-400 font-medium text-xl">
            - $ {totalLiabilities.toLocaleString()}
          </span>
        </div>
        <div className="result">
          NET WORTH
          <br />
          <span
            className={`text-xl font-bold ${
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
