import supabase from "./supabase";
import "./index.css";

import { useEffect } from "react";
import { useState } from "react";

import Header from "./components/Header";
import ItemForm from "./components/ItemForm";

import ItemList from "./components/ItemList";

import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Results from "./components/Results";

function App() {
  // Show/Hide Form
  const [showForm, setShowForm] = useState(false);
  // Display and Upload to Supabase
  const [items, setItems] = useState([]);
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
    // Is data loading from Supabase?
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // Add Record Form
        <>
          <Header showForm={showForm} setShowForm={setShowForm} />

          {showForm ? null : <Results />}

          {showForm ? (
            <ItemForm setItems={setItems} setShowForm={setShowForm} />
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
