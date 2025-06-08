import Assets from "./Assets";
import Losses from "./Losses";
import Equity from "./Equity";

function Stats() {
  return (
    <>
      <div className="stats">
        <Assets />
        <Losses />
        <Equity />
      </div>
    </>
  );
}

export default Stats;
