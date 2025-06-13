function Record({ record, onDelete }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-2 items-center">
      <span>{record.name}</span>
      <span>{record.status}</span>
      <span>{record.type}</span>
      <div className="flex justify-between items-center">
        <span>{record.value}</span>
        <button className="btn-primary" onClick={() => onDelete(record.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Record;
