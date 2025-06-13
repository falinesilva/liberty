import Record from "./Record";

import supabase from "../supabase";

function RecordList({ records, setRecords }) {
  async function handleDelete(id) {
    await supabase.from("items").delete().eq("id", id);
    setRecords((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <>
      {records.map((record) => (
        <Record key={record.id} record={record} onDelete={handleDelete} />
      ))}
    </>
  );
}

export default RecordList;
