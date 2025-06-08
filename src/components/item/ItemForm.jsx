import { useState } from "react";
import supabase from "../../supabase";
import save from "../assets/save.png";
import cancel from "../assets/cancel.png";

const ASSETS = [
  { name: "business ownership" },
  { name: "cash" },
  { name: "collectibles" },
  { name: "cryptocurrency" },
  { name: "equipment" },
  { name: "mutual fund / etf" },
  { name: "other investments" },
  { name: "real estate" },
  { name: "retirement account" }, // ✅ typo fixed
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

function ItemForm({ setItems, setShowMenu }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const numericValue = parseFloat(value);

    // Basic validation
    if (!name || isNaN(numericValue) || !type) {
      alert("Please fill out all fields correctly.");
      return;
    }

    setIsUploading(true);

    const { data, error } = await supabase
      .from("items")
      .insert([{ name, type, value: numericValue }])
      .select();

    setIsUploading(false);

    if (error) {
      alert("Error adding item: " + error.message);
      return;
    }

    if (data && data.length > 0) {
      setItems((items) => [data[0], ...items]); // ✅ update UI
      setShowMenu(false); // ✅ close form
      setName("");
      setType("");
      setValue("");
    } else {
      alert("Item not returned from database.");
    }
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isUploading}
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        disabled={isUploading}
        required
      >
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
      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isUploading}
        required
      />
      <div className="item-form-buttons">
        <button
          type="submit"
          className="btn btn-add-save"
          disabled={isUploading}
        >
          <img src={save} width="36" alt="Save" />
        </button>
        <button
          type="button"
          className="btn btn-add-save"
          onClick={() => setShowMenu(false)}
          disabled={isUploading}
        >
          <img src={cancel} width="36" alt="Cancel" />
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
