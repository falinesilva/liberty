import Record from "./Record";

function RecordList({ records }) {
  return (
    <>
      <div className="text-sm grid gap-4">
        {records.map((record) => (
          <Record key={record.id} record={record} />
        ))}
      </div>
    </>
  );
}

export default RecordList;
