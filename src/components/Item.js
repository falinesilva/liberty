import React from "react";

function Item({ item }) {
  return (
    <div className="item">
      <div>
        <span className="name">{item.name}</span>
        <br />
        <span className="type">{item.type}</span>
        <br />
        <span className="value">{item.value}</span>
      </div>
      <div className="item-buttons">
        <button className="btn btn-delete-item">Delete</button>
        <button className="btn btn-edit-item">Edit</button>
      </div>
    </div>
  );
}
export default Item;
