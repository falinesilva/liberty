function Results({ records }) {
  let totalAssets = records
    .filter((r) => r.status === "Asset")
    .reduce((sum, r) => sum + r.value, 0);

  let totalLosses = records
    .filter((r) => r.status === "Loss")
    .reduce((sum, r) => sum + r.value, 0);

  let totalEquity = totalAssets - totalLosses;

  return (
    <>
      <div className="flex justify-center columns-3 gap-5 m-4">
        <div className="text-center bg-[#252728] text-white p-4 items-center rounded-2xl">
          Assets
          <br />
          <span className="font-medium text-[#CCFF00]">
            $ +{totalAssets.toLocaleString()}
          </span>
        </div>
        <div className="text-center bg-[#252728] text-white p-4 items-center rounded-2xl">
          Losses
          <span className="text-[#FA4A4A] font-medium">
            <br />$ -{totalLosses.toLocaleString()}
          </span>
        </div>
        <div
          className={`text-center font-medium ${
            totalEquity > 0 ? "bg-[#CCFF00]" : "bg-[#FA4A4A]"
          } text-black p-4 items-center rounded-2xl`}
        >
          Equity
          <br />
          <span className="font-bold">$ {totalEquity.toLocaleString()}</span>
        </div>
      </div>
    </>
  );
}
export default Results;
