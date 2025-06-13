import supabase from "./supabase";
import "./index.css";

import { useEffect } from "react";
import { useState } from "react";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Results from "./components/Results";
import AddRecordForm from "./components/AddRecordForm";
import RecordList from "./components/RecordList";
import Footer from "./components/Footer";

function App() {
  // Show and Hide the AddRecordForm
  const [showRecordForm, setShowRecordForm] = useState(false);

  // Update the list of Records
  const [records, setRecords] = useState([]);

  // Display loading bar while waiting for supabase
  const [isLoading, setIsLoading] = useState(false);

  // Fetch existing records from supabase
  useEffect(function () {
    async function getRecords() {
      setIsLoading(true);
      const { data: records, error } = await supabase
        .from("items")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(500); // TODO: add paging
      if (error) {
        alert("Error fetching records...", error.message);
      } else if (!error) {
        setRecords(records);
        setIsLoading(false);
      }
    }
    getRecords();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#1a1a1a] text-white px-4">
      <div className="w-full max-w-4xl p-8 sm:p-12 text-white rounded-2xl text-lg">
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Header
                showRecordForm={showRecordForm}
                setShowRecordForm={setShowRecordForm}
              />

              {showRecordForm ? (
                <AddRecordForm
                  setRecords={setRecords}
                  setShowRecordForm={setShowRecordForm}
                />
              ) : (
                <Results />
              )}

              <RecordList
                records={records}
                setRecords={setRecords}
                showRecordForm={showRecordForm}
                setShowRecordForm={setShowRecordForm}
              />
            </>
          )}
          <Footer />
        </>
      </div>
    </div>
  );
}

export default App;
