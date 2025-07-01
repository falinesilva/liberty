function Record({ record, onDelete }) {
  return (
    <>
      <div className="m-2 grid gap-x-4 items-center grid-cols-5 max-xxs:grid-cols-3 bg-slate-900 rounded-md p-2 center text-sm">
        <div className="justify-self-center">
          <button className="btn-primary" onClick={() => onDelete(record.id)}>
            DELETE
          </button>
        </div>
        <span className="justify-self-center max-xxs:hidden">
          {(record?.status || "").toUpperCase()}
        </span>

        <span className="justify-self-center max-xxs:hidden">
          {record.type}
        </span>
        <span className="justify-self-center">{record.name}</span>
        <span className="justify-self-end p-2">
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
