const ASSETS = [
  { name: "business ownership" },
  { name: "cash" },
  { name: "collectibles" },
  { name: "cryptocurrency" },
  { name: "equipment" },
  { name: "mutual fund / etf" },
  { name: "other investments" },
  { name: "real estate" },
  { name: "retirment account" },
  { name: "stocks" },
  { name: "bonds" },
  { name: "valuables" },
  { name: "vehicle" },
];

const LIABILITIES = [
  { name: "outstanding bills" },
  { name: "credit card balance" },
  { name: "medical bill" },
  { name: "mortgage" },
  { name: "bank loan" },
  { name: "personal loan" },
  { name: "student loan" },
  { name: "auto loan" },
  { name: "buy now pay later" },
  { name: "tax debt" },
  { name: "child support" },
  { name: "alimony" },
  { name: "business debt" },
  { name: "payday loan" },
];

function ItemForm() {
  return (
    <form className="item-form">
      <input type="text" placeholder="Name" />
      <select>
        <option value="">Type:</option>
        <optgroup label="Assets">
          {ASSETS.map((asset) => (
            <option key={asset.name} value={asset.name}>
              {asset.name.toUpperCase()}
            </option>
          ))}
        </optgroup>
        <optgroup label="Liabilities">
          {LIABILITIES.map((liability) => (
            <option key={liability.name} value={liability.name}>
              {liability.name.toUpperCase()}
            </option>
          ))}
        </optgroup>
      </select>
      <input type="text" placeholder="Value" />
      <div className="item-form-buttons">
        <button type="button" className="btn btn-add-save">
          Save
        </button>
        <button type="button" className="btn btn-add-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ItemForm;
