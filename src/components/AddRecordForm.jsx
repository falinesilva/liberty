import { useState } from "react";
import supabase from "../supabase";

const TYPES = [
  { name: "Cash", status: "Asset" },
  { name: "Realty", status: "Asset" },
  { name: "Saving", status: "Asset" },
  { name: "Vehicle", status: "Asset" },

  { name: "Bill", status: "Liability" },
  { name: "Credit Card", status: "Liability" },
  { name: "Loan", status: "Liability" },
  { name: "Tax", status: "Liability" },
];

function AddRecordForm({ setRecords, setShowRecordForm }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
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

    const user = (await supabase.auth.getUser()).data.user;

    const { data, error } = await supabase
      .from("items")
      .insert([{ name, type, value: numericValue, status, user_id: user.id }])
      .select();

    setIsUploading(false);

    if (error) {
      alert("Error adding item: " + error.message);
      return;
    }

    if (data && data.length > 0) {
      setRecords((items) => [data[0], ...items]);
      setShowRecordForm(false);
      setName("");
      setType("");
      setValue("");
      setShowErrors(false);
    } else {
      alert("Item not returned from database.");
    }
  }

  return (
    <div className="flex items-center m-4 justify-center">
      <form
        className="w-full max-w-lg p-6 gap-4 bg-neutral-800 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          className="form-primary"
          type="text"
          placeholder="name"
          value={name}
          maxLength="30"
          onChange={(e) => setName(e.target.value)}
          disabled={isUploading}
          style={{
            ...(showErrors && {
              border: "4px solid #FA4A4A",
            }),
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "none",
          }}
        />
        <div className="text-right mb-4 text-sm text-red">
          {30 - name.length}
        </div>

        <input
          className="form-primary"
          type="text"
          maxLength="30"
          placeholder="value"
          value={value}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^\d]/g, "");
            setValue(raw ? "$" + Number(raw).toLocaleString() : "");
          }}
          disabled={isUploading}
          style={{
            ...(showErrors &&
              isNaN(parseFloat(value.replace(/[^0-9.]/g, ""))) && {
                border: "4px solid #FA4A4A",
              }),
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "none",
          }}
        />

        <select
          className="form-primary"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            const selected = TYPES.find((t) => t.name === e.target.value);
            setStatus(selected.status);
          }}
          disabled={isUploading}
          style={{
            ...(showErrors &&
              !type && {
                border: "4px solid #FA4A4A",
              }),
          }}
        >
          <option value="" disabled>
            type
          </option>
          {TYPES.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <button type="submit" className="btn-primary" disabled={isUploading}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecordForm;
