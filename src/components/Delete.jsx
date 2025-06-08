import deleteItem from "../assets/delete-item.png";

function Delete() {
  return (
    <button className="btn btn-item">
      <img src={deleteItem} width="36" alt="Delete"></img>
    </button>
  );
}

export default Delete;
