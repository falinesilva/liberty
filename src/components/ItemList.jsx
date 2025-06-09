import Item from "./Item";
import NewRecord from "./NewRecord";
function ItemList({ showForm, setShowForm, items }) {
  return (
    <>
      <NewRecord showForm={showForm} setShowForm={setShowForm} />
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
