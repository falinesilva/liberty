function Item({ item }) {
  return (
    <div className="item">
      <div className="item-buttons">
        <button className="btn btn-delete-item">Delete</button>
        <button className="btn btn-edit-item">Edit</button>
      </div>
      <div>
        <span className="name">{item.name.toUpperCase()}</span>
        <br />
      </div>
      <div>
        <span className="type">{item.type.toUpperCase()}</span>
      </div>
      <span className="value">$ {item.value.toLocaleString()}</span>
    </div>
  );
}
export default Item;
