function Record({ record, onDelete }) {
  return (
    <>
      <div className="m-4 grid items-center grid-cols-5 bg-slate-900 rounded-md p-4 center text-sm">
        <div className="justify-self-center">
          <button className="btn-primary" onClick={() => onDelete(record.id)}>
            Delete
          </button>
        </div>
        <span className="justify-self-center">
          {(record?.status || "").toUpperCase()}
        </span>

        <span className="justify-self-center">{record.type}</span>
        <span className="justify-self-center">{record.name}</span>
        <span className="justify-self-start">
          <span
            className={`text-lg ${
              record.status.toLowerCase() === "asset"
                ? "text-blue-400"
                : "text-red-400"
            }`}
          >
            {record.status.toLowerCase() === "asset" ? "+" : "-"} $
            {record.value.toLocaleString()}
          </span>
        </span>
      </div>
    </>
  );
}
export default Record;
