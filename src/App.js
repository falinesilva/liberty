import "./style.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemForm from "./components/ItemForm";
import NetWorth from "./components/NetWorth";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);

  useEffect(() => {
    if (showItemForm) {
      setShowMenu(false);
    }
  });

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? (
        <Menu showItemForm={showItemForm} setShowItemForm={setShowItemForm} />
      ) : null}
      {showItemForm ? <ItemForm /> : null}
      <NetWorth />
      <ItemList />
      <Footer />
    </>
  );
}
export default App;
