function Results() {
  let totalAssets = "5,000";
  let totalLosses = "2,000";
  let totalEquity = "1,100";

  return (
    <>
      <div className="flex justify-center columns-3 gap-5 m-4">
        <div className="text-center bg-[#252728] text-white p-4 items-center rounded-2xl">
          Assets
          <br />
          <span className="font-medium text-[#CCFF00]">$ {totalAssets}</span>
        </div>
        <div className="text-center bg-[#252728] text-white p-4 items-center rounded-2xl">
          Losses
          <span className="text-[#FA4A4A] font-medium">
            <br />$ {totalLosses}
          </span>
        </div>
        <div className="text-center font-medium bg-[#CCFF00] text-black p-4 items-center rounded-2xl">
          Equity
          <br />
          <span className="font-bold">$ {totalEquity}</span>
        </div>
      </div>
    </>
  );
}
export default Results;
