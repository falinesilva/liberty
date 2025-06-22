import supabase from "./supabase";
import "./index.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Results from "./components/Results";
import AddRecordForm from "./components/AddRecordForm";
import RecordList from "./components/RecordList";
import Footer from "./components/Footer";
import AuthForm from "./AuthForm";

function App() {
  const [user, setUser] = useState(null);
  const [showAuthForm, setShowAuthForm] = useState(true);
  const [showRecordForm, setShowRecordForm] = useState(false);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setShowAuthForm(!user);

      if (user) {
        fetchRecords(user.id);
      }
    }

    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setShowAuthForm(!currentUser);

        if (currentUser) fetchRecords(currentUser.id);
        else setRecords([]);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  async function fetchRecords(userId) {
    setIsLoading(true);
    const { data: records, error } = await supabase
      .from("items")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true })
      .limit(100);

    if (error) {
      alert("Error fetching records: " + error.message);
    } else {
      setRecords(records);
    }
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#1a1a1a] text-white px-4">
      <div className="w-full max-w-4xl p-8 sm:p-12 text-white rounded-2xl text-lg">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {showAuthForm ? (
              <AuthForm
                setShowAuthForm={setShowAuthForm}
                showAuthForm={showAuthForm}
              />
            ) : null}

            <Header
              user={user}
              setUser={setUser}
              showRecordForm={showRecordForm}
              setShowRecordForm={setShowRecordForm}
            />

            {showRecordForm ? (
              <AddRecordForm
                setRecords={setRecords}
                setShowRecordForm={setShowRecordForm}
              />
            ) : (
              <Results records={records} />
            )}
            <RecordList
              records={records}
              setRecords={setRecords}
              showRecordForm={showRecordForm}
              setShowRecordForm={setShowRecordForm}
            />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
