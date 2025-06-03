import "./style.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemForm from "./components/ItemForm";
import NetWorth from "./components/NetWorth";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? <Menu /> : null}
      <ItemForm />
      <NetWorth />
      <ItemList />
      <Footer />
    </>
  );
}
export default App;
