import Record from "./Record";
function ItemList({ showForm, setShowForm, items }) {
  return (
    <>
      <div className="item-list">
        {items.map((item) => (
          <Record key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
