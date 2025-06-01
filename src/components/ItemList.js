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
        <div key={item.id} className="item">
          <div>
            <span className="name">{item.name}</span>
            <br />
            <span className="type">{item.type}</span>
            <br />
            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
            <br />
            <span className="value">{item.value}</span>
          </div>
          <div className="item-buttons">
            <button className="btn btn-delete-item">Delete</button>
            <button className="btn btn-edit-item">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
