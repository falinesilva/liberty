import { useState } from "react";
import supabase from "../supabase";

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

    if (!name || isNaN(numericValue) || !type || !status) {
      setShowErrors(true);
      return;
    }

    setIsUploading(true);

    const { data, error } = await supabase
      .from("items")
      .insert([{ name, type, value: numericValue, status }])
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
      setStatus("");
      setShowErrors(false);
    } else {
      alert("Item not returned from database.");
    }
  }

  return (
    <div className="flex justify-center items-center mb-6">
      <form
        className="w-full max-w-lg p-6 gap-4 bg-[#252728] rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          className="form-primary"
          type="text"
          placeholder="Name"
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
        <div className="text-right text-sm text-red">{30 - name.length}</div>

        <input
          className="form-primary"
          type="text"
          maxLength="30"
          placeholder="Value"
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
          onChange={(e) => setType(e.target.value)}
          disabled={isUploading}
          style={{
            ...(showErrors &&
              !type && {
                border: "4px solid #FA4A4A",
              }),
          }}
        >
          <option value="" disabled>
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
                {name}
              </option>
            ))}
          </optgroup>
        </select>

        <select
          className="form-primary"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled={isUploading}
          style={{
            ...(showErrors &&
              !status && {
                border: "4px solid #FA4A4A",
              }),
          }}
        >
          <option value="" disabled>
            Status
          </option>
          <option value="Asset">Asset</option>
          <option value="Loss">Loss</option>
        </select>

        <button type="submit" className="btn-primary" disabled={isUploading}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecordForm;
