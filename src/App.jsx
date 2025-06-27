import supabase from "./supabase";
import "./index.css";

import { useEffect, useState } from "react";

import { SnackbarProvider } from "./contexts/SnackbarContext";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Results from "./components/Results";
import AddRecordForm from "./components/AddRecordForm";
import RecordList from "./components/RecordList";
import Footer from "./components/Footer";
import AuthForm from "./AuthForm";
import NewRecord from "./components/NewRecord";

function App() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

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

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const displayName = userData?.user?.user_metadata?.display_name;
    if (displayName) setDisplayName(displayName);

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
    <SnackbarProvider>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
        <div className="w-full max-w-4xl  text-slate-50 rounded-2xl text-lg">
          {showAuthForm ? (
            <AuthForm
              setShowAuthForm={setShowAuthForm}
              showAuthForm={showAuthForm}
            />
          ) : isLoading ? (
            <Loader />
          ) : (
            <>
              <Header user={user} displayName={displayName} />

              {showRecordForm ? (
                <AddRecordForm
                  setRecords={setRecords}
                  setShowRecordForm={setShowRecordForm}
                />
              ) : (
                <Results records={records} />
              )}
              <NewRecord
                showRecordForm={showRecordForm}
                setShowRecordForm={setShowRecordForm}
              />
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
    </SnackbarProvider>
  );
}
export default App;
