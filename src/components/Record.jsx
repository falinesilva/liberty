function Record({ record, onDelete }) {
  return (
    <>
      <div className="m-4 grid items-center grid-cols-5 bg-[#252728] rounded-md p-4 center text-sm">
        <span className="justify-self-center">
          {(record?.status || "").toUpperCase()}
        </span>

        <span className="justify-self-center">{record.type}</span>
        <span className="justify-self-center">{record.name}</span>
        <span className="justify-self-start">
          <span
            className={`text-lg ${
              record.status.toLowerCase() === "asset"
                ? "text-[#CCFF00]"
                : "text-[#FA4A4A]"
            }`}
          >
            {record.status.toLowerCase() === "asset" ? "+" : "-"} $
            {record.value.toLocaleString()}
          </span>
        </span>
        <button
          className="btn-primary text-xs p-1 w-h"
          onClick={() => onDelete(record.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
export default Record;
