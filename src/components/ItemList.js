import Item from "./Item";

const InitialItems = [
  {
    id: 1,
    name: "Estate Property",
    type: "Real Estate",
    class: "Asset",
    value: "R$ 150.000",
  },
  {
    id: 2,
    name: "NuBank MasterCard",
    type: "Credit Cards",
    class: "Liability",
    value: "R$ 3.000",
  },
];

export default function ItemList() {
  // Using static data for now – replace with props or fetch later
  const items = InitialItems;

  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
