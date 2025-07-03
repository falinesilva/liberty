import supabase from "../supabase";

async function signOut() {
  await supabase.auth.signOut();
}

function Header({
  NewRecord,
  showRecordForm,
  setShowRecordForm,
  showNewRecord,
  user,
  displayName,
}) {
  return (
    <>
      <div className="sticky top-0 z-10 bg-slate-950 w-full flex justify-between items-center px-4 py-2 text-xl text-white max-xxs:text-sm">
        <div className="text-xl max-xxs:text-sm">
          {displayName}

          <button
            className="text-blue-500 uppercase text-sm hover:opacity-50 p-2 cursor-pointer max-xxs:text-sm"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
        {!showRecordForm ? (
          <NewRecord
            setShowRecordForm={setShowRecordForm}
            showNewRecord={showNewRecord}
          />
        ) : null}
      </div>
    </>
  );
}

export default Header;
