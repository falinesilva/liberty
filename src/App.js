import "./style.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemForm from "./components/ItemForm";
import NetWorth from "./components/NetWorth";
import ItemList from "./components/ItemList";

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

function App() {
  return (
    <>
      <Header />
      <Menu />
      <ItemForm />
      <NetWorth />
      <ItemList />
    </>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <span className="name">{item.name}</span>
      <br />
      <span className="type">{item.type}</span>
      <br />
      <span className="class">{item.class}</span>
      <br />
      <span className="value">{item.value}</span>
      <div className="item-buttons">
        <button className="btn btn-delete-item">Delete</button>
        <button className="btn btn-edit-item">Edit</button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Faline Silva. All rights reserved.</p>
    </footer>
  );
}

export default App;
