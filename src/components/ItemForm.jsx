import { useState } from "react";
import supabase from "../supabase";

// Type Options
const ASSETS = [
  { name: "Cash" },
  { name: "Realty" },
  { name: "Saving" },
  { name: "Vehicle" },
  { name: "Other" },
];

const LIABILITIES = [
  { name: "Bill" },
  { name: "Credit" },
  { name: "Loan" },
  { name: "Tax" },
  { name: "Other" },
];

function ItemForm({ setItems, setShowForm }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

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
      setShowForm(false);
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
        style={{
          color: name ? "#000" : "#555", // consistent font color logic
          ...(showErrors && {
            border: "4px solid #FB64B6",
          }),
          appearance: "textfield",
          MozAppearance: "textfield",
          WebkitAppearance: "none",
        }}
      />

      <select
        style={{
          color: type ? "#000" : "#555", // consistent font color logic
          ...(showErrors &&
            !type && {
              border: "4px solid #FB64B6",
            }),
          appearance: "textfield",
          MozAppearance: "textfield",
          WebkitAppearance: "none",
        }}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" disabled={isUploading}>
          Type
        </option>
        <optgroup label="Assets">
          {ASSETS.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </optgroup>
        <optgroup label="Liabilities">
          {LIABILITIES.map(({ name }) => (
            <option key={name} value={name}>
              {name.toUpperCase()}
            </option>
          ))}
        </optgroup>
      </select>

      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^\d]/g, "");
          setValue(raw ? "$" + Number(raw).toLocaleString() : "");
        }}
        disabled={isUploading}
        style={{
          color:
            value && parseFloat(value.replace(/[^0-9.]/g, ""))
              ? "#000"
              : "#555", // consistent font color logic
          ...(showErrors &&
            isNaN(parseFloat(value.replace(/[^0-9.]/g, ""))) && {
              border: "4px solid #FB64B6",
            }),
          appearance: "textfield",
          MozAppearance: "textfield",
          WebkitAppearance: "none",
        }}
      />

      {/* Submit Button */}
      <div className="item-form-buttons">
        <button type="submit" className="btn" disabled={isUploading}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
