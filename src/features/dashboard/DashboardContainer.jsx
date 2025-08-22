import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Results from "./Results";
import AddRecordForm from "./AddRecordForm";
import RecordList from "./RecordList";
import Footer from "../../components/Footer";
import NewRecord from "./NewRecord";

import { fetchRecords } from "../../services/recordsService";
import { getDisplayName } from "../../services/userService";

export default function DashboardContainer({ user }) {
  const [displayName, setDisplayName] = useState("");
  const [showRecordForm, setShowRecordForm] = useState(false);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function loadRecords() {
      setIsLoading(true);
      try {
        setDisplayName(getDisplayName(user));
        const data = await fetchRecords(user.id);
        setRecords(data);
      } catch (err) {
        alert("Error fetching records: " + err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadRecords();
  }, [user]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header
        showRecordForm={showRecordForm}
        setShowRecordForm={setShowRecordForm}
        NewRecord={NewRecord}
        user={user}
        displayName={displayName}
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
  );
}
