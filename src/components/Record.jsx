import DeleteButton from "./DeleteButton";
function Item({ item }) {
  return (
    <>
      <div className="grid items-center grid-cols-4 bg-[#1B1B1D] opacity-80 rounded-md p-4 center">
        <span className="justify-self-start">{item.type}</span>

        <span className="justify-self-start">{item.name}</span>
        <span className="justify-self-end">
          $ {item.value.toLocaleString()}
        </span>
        <span className="justify-self-center">
          <DeleteButton />
        </span>
      </div>
    </>
  );
}
export default Item;
