import Item from "./Item";

const initialItems = [
  {
    id: 1,
    name: "Estate Property",
    type: "Real Estate",
    status: "Asset",
    value: "R$150.000",
  },
  {
    id: 2,
    name: "MasterCard",
    type: "Credit Card",
    status: "Liability",
    value: "-R$900",
  },
];

function ItemList() {
  // TODO: Swap static data with SupaBase table
  const items = initialItems;

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
