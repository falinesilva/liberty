import React, { useEffect } from "react";
import { useState } from "react";

import supabase from "./supabase";

import "./index.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Equity from "./components/Equity";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

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
  const [isLoading, setIsLoading] = useState(false);

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
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? <Menu setItems={setItems} /> : null}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ItemList items={items} />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
