import React from "react";
import supabase from "./../supabase";

import { useState } from "react";

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

function ItemForm({ setItems, setShowItemForm }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    // Prevent browser reload
    e.preventDefault();
    if (name && value && type) {
      setIsUploading(true);
      const { data: newItem, error } = await supabase
        .from("items")
        .insert([{ name, type, value }])
        .select();

      setIsUploading(false);

      if (!error) console.log(newItem);
      else alert("Error adding item...", error.message);

      setItems((items) => [newItem[0], ...items]);

      setName("");
      setType("");
      setValue("");
      setShowItemForm(false);
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
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        disabled={isUploading}
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
        value={value}
        type="text"
        placeholder="Value"
        onChange={(e) => setValue(e.target.value)}
        disabled={isUploading}
      />
      <div className="item-form-buttons">
        <button className="btn btn-add-save" disabled={isUploading}>
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
