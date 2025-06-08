import deleteItem from "../assets/delete-item.png";

function Delete() {
  return (
    <button className="btn">
      <img src={deleteItem} width="48" alt="Delete"></img>
    </button>
  );
}

export default Delete;
