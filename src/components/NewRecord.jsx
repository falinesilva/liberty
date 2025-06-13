function NewRecord({ setShowRecordForm, showRecordForm }) {
  return (
    <button
      className="btn-primary text-lg text-center"
      onClick={() => setShowRecordForm((show) => !show)}
    >
      {!showRecordForm ? "Add" : "X"}
    </button>
  );
}
export default NewRecord;
