function NewRecord({ showForm, setShowForm }) {
  return (
    <button className="btn" onClick={() => setShowForm((show) => !show)}>
      {showForm ? "X" : "New"}
    </button>
  );
}

export default NewRecord;
