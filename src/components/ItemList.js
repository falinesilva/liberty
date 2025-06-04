import React from "react";

import Item from "./Item";
function ItemList({ items }) {
  // TODO: Swap static data with SupaBase table

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
