export default function Item({ item }) {
  return (
    <li className="item">
      <span className="name">{item.name}</span>
      <br />
      <span className="type">{item.type}</span>
      <br />
      <span className={`class ${item.class.toLowerCase()}`}>{item.class}</span>
      <br />
      <span className="value">{item.value}</span>
      <div className="item-buttons">
        <button className="btn btn-delete-item">Delete</button>
        <button className="btn btn-edit-item">Edit</button>
      </div>
    </li>
  );
}
