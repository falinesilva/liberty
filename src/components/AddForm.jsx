import openForm from "../assets/open-form.png";
import closeForm from "../assets/close-form.png";

function AddForm({ showMenu, setShowMenu }) {
  if (showMenu) return null;

  return (
    <button
      className="btn btn-edit-item"
      onClick={() => setShowMenu((show) => !show)}
    >
      <img
        src={showMenu ? closeForm : openForm}
        width="36"
        alt="Add new item"
      />
    </button>
  );
}

export default AddForm;
