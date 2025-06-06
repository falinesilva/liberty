import { useState } from "react";
import ItemForm from "./ItemForm";
function Menu({ setItems }) {
  const [showItemForm, setShowItemForm] = useState(false);
  return (
    <>
      <div className="menu">
        <label className="toggle">
          <span>Show Net Worth</span>
          <input type="checkbox" id="toggle-stats" />
          <span className="slider"></span>
        </label>
        <label className="toggle">
          <span>Show Assets</span>
          <input type="checkbox" id="toggle-assets" />
          <span className="slider"></span>
        </label>

        <label className="toggle">
          <span>Show Liabilities</span>
          <input type="checkbox" id="toggle-liabilities" />
          <span className="slider"></span>
        </label>
        <button
          className="btn btn-add"
          onClick={() => setShowItemForm((show) => !show)}
        >
          Add item
        </button>
      </div>
      {showItemForm ? (
        <ItemForm setItems={setItems} setShowItemForm={setShowItemForm} />
      ) : null}
    </>
  );
}

export default Menu;
