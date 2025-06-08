import AddForm from "../AddForm";
import ItemForm from "./ItemForm";
import Item from "../Item";

function ItemList({ showMenu, setShowMenu, items, setItems }) {
  return (
    <div className="item-list">
      <div className="item add">
        <AddForm showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
