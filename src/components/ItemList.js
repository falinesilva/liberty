function ItemList() {
  return (
    <div className="item-list">
      <div className="item">
        <div>
          <span className="name">Estate Property</span>
          <br />
          <span className="type">Real Estate</span>
          <br />
          <span className="className asset">Asset</span>
          <br />
          <span className="value">R$ 150.000</span>
        </div>
        <div className="item-buttons">
          <button className="btn btn-delete-item">Delete</button>
          <button className="btn btn-edit-item">Edit</button>
        </div>
      </div>

      <div className="item">
        <div>
          <span className="name">NuBank MasterCard</span>
          <br />
          <span className="type">Credit Cards</span>
          <br />
          <span className="className liability">Liability</span>
          <br />
          <span className="value">R$ 3.000</span>
        </div>
        <div className="item-buttons">
          <button className="btn btn-delete-item">Delete</button>
          <button className="btn btn-edit-item">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
