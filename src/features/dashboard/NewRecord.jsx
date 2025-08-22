function NewRecord({ setShowRecordForm, showRecordForm }) {
  return (
    <div>
      <button
        className="btn-primary max-xxs:!text-xs"
        onClick={() => setShowRecordForm((show) => !show)}
      >
        + Add record
      </button>
    </div>
  );
}
export default NewRecord;
