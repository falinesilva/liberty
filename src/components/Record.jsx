import DeleteRecordButton from "./DeleteRecordButton";
function Record({ record }) {
  return (
    <>
      <div className="grid items-center grid-cols-5 bg-[#252728] rounded-md p-4 center ml-2">
        <span className="justify-self-center">
          {(record?.status || "").toUpperCase()}
        </span>

        <span>{record.type}</span>

        <span>{record.name}</span>
        <span className="justify-self-start">
          $ {record.value.toLocaleString()}
        </span>

        <span className="justify-self-center">
          <DeleteRecordButton />
        </span>
      </div>
    </>
  );
}
export default Record;
