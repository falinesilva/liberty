import { useState } from "react";
import supabase from "../supabase";
import save from "../assets/save.png";
import cancel from "../assets/cancel.png";

// Type Options
const ASSETS = [
  { name: "business ownership" },
  { name: "cash" },
  { name: "collectibles" },
  { name: "cryptocurrency" },
  { name: "equipment" },
  { name: "mutual fund / etf" },
  { name: "other investments" },
  { name: "real estate" },
  { name: "retirement account" },
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
  const [showErrors, setShowErrors] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const numericValue = parseFloat(value);

    if (!name || isNaN(numericValue) || !type) {
      setShowErrors(true);
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
      setItems((items) => [data[0], ...items]);
      setShowMenu(false);
      setName("");
      setType("");
      setValue("");
      setShowErrors(false);
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
        style={
          showErrors && !name ? { border: "2px solid #e11d48" } : undefined
        }
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          color: type ? "#f8fafc" : "#999",
          ...(showErrors && !type && { border: "2px solid #e11d48" }),
        }}
      >
        <option value="" disabled hidden>
          Select type
        </option>
        <optgroup label="Assets">
          {ASSETS.map(({ name }) => (
            <option key={name} value={name} style={{ color: "#f8fafc" }}>
              {name.toUpperCase()}
            </option>
          ))}
        </optgroup>
        <optgroup label="Liabilities">
          {LIABILITIES.map(({ name }) => (
            <option key={name} value={name} style={{ color: "#f8fafc" }}>
              {name.toUpperCase()}
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
        style={{
          ...(showErrors &&
            isNaN(parseFloat(value)) && { border: "2px solid #e11d48" }),
          appearance: "textfield",
          MozAppearance: "textfield",
          WebkitAppearance: "none",
        }}
      />

      <div className="item-form-buttons">
        <button type="submit" className="btn" disabled={isUploading}>
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
