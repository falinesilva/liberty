function NewRecord({ setShowForm }) {
  return (
    <button
      className="btn"
      onClick={() => setShowForm((show) => !show)}
    ></button>
  );
}
export default NewRecord;
