import Record from "./Record";

import supabase from "../supabase";

function RecordList({ records, setRecords }) {
  async function handleDelete(id) {
    await supabase.from("items").delete().eq("id", id);
    setRecords((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <>
      <div className="px-2">
        {records.length === 0 ? (
          <h2 className="flex justify-center text-2xl">Nothing here yet...</h2>
        ) : (
          <>
            {records.map((record) => (
              <Record key={record.id} record={record} onDelete={handleDelete} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default RecordList;
