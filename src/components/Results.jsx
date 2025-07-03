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
      <div className="flex justify-center columns-3 gap-5 mb-4 px-4">
        <div className="result max-xxs:!text-xs">
          ASSETS
          <br />
          <span className="text-blue-400">
            $ {totalAssets.toLocaleString()}
          </span>
        </div>
        <div className="result max-xxs:!text-xs">
          LIABILITIES
          <br />
          <span className="text-red-400">
            - $ {totalLiabilities.toLocaleString()}
          </span>
        </div>
        <div className="result max-xxs:!text-xs">
          NET WORTH
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
