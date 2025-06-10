function NewRecord({ setShowForm, showForm }) {
  return (
    <button
      className="btn-primary"
      onClick={() => setShowForm((show) => !show)}
    >
      {!showForm ? "New" : "X"}
    </button>
  );
}
export default NewRecord;
