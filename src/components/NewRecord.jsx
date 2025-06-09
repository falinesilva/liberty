function NewRecord({ setShowForm, showForm }) {
  return (
    <button className="btn" onClick={() => setShowForm((show) => !show)}>
      {showForm ? "New" : "X"}
    </button>
  );
}
export default NewRecord;
