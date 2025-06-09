function NewRecord({ setShowForm }) {
  return (
    <button className="btn" onClick={() => setShowForm((show) => !show)}>
      New
    </button>
  );
}
export default NewRecord;
