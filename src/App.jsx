import supabase from "./supabase";
import "./index.css";

import { useEffect } from "react";
import { useState } from "react";

import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ItemForm from "./components/ItemForm";

function App() {
  const [showForm, setShowForm] = useState(false);
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
          <Header showForm={showForm} setShowForm={setShowForm} />
          {showForm ? (
            <ItemForm setItems={setItems} setShowMenu={setShowForm} />
          ) : null}
          <ItemList
            items={items}
            setItems={setItems}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
