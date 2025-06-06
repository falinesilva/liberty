import Delete from "./Delete";
function Item({ item }) {
  return (
    <>
      <div className="item">
        <span className="left">{item.name}</span>
        <span> {item.type.toUpperCase()}</span>
        <span className="value">$ {item.value.toLocaleString()}</span>
        <span className="right">
          <Delete />
        </span>
      </div>
    </>
  );
}
export default Item;
