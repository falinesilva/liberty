import React, { useEffect } from "react";
import { useState } from "react";

import supabase from "./supabase";

import "./index.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Upload to DB
  useEffect(function () {
    async function getItems() {
      setIsLoading(true);
      const { data: items, error } = await supabase
        .from("items")
        .select("*")
        .order("value", { ascending: true })
        .limit(500);
      if (error) {
        alert("Error fetching items:", error.message);
      } else if (!error) {
        setItems(items);
        setIsLoading(false);
      }
    }
    getItems();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />
          {showMenu ? (
            <Menu setItems={setItems} setShowMenu={setShowMenu} />
          ) : null}
          <ItemList
            items={items}
            setItems={setItems}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
