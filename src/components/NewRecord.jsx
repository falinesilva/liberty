function NewRecord({ setShowRecordForm, showRecordForm }) {
  return (
    <div className="flex justify-end">
      <button
        className="btn-primary text-lg text-center"
        onClick={() => setShowRecordForm((show) => !show)}
      >
        {!showRecordForm ? "Add item" : "Cancel"}
      </button>
    </div>
  );
}
export default NewRecord;
