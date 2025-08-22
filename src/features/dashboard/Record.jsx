function Record({ record, onDelete }) {
  return (
    <>
      <div className="m-2 grid max-xxs:grid-cols-[64px_auto_auto]  gap-x-4 items-center grid-cols-5 bg-slate-900 rounded-md p-2 center text-sm">
        <div className="justify-self-start">
          <button
            className="btn-primary !px-1 !py-1 !text-xs"
            onClick={() => onDelete(record.id)}
          >
            DELETE
          </button>
        </div>
        <span className="justify-self-start max-xxs:hidden">
          {(record?.status || "").toUpperCase()}
        </span>

        <span className="justify-self-start max-xxs:hidden">{record.type}</span>
        <span className="justify-self-left pl-2">{record.name}</span>
        <span className="justify-self-end pr-4">
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
