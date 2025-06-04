import "./style.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import NetWorth from "./components/NetWorth";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

import { useState } from "react";

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

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? <Menu setItems={setItems} /> : null}

      <NetWorth />
      <ItemList items={items} />
      <Footer />
    </>
  );
}

export default App;
