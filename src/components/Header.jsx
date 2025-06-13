import NewRecord from "./NewRecord";
import logo from "./../assets/logo.png";

function Header({ showRecordForm, setShowRecordForm }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Liberty Logo" className="h-12 w-auto" />{" "}
        {/* Set height and maintain aspect ratio */}
        <NewRecord
          showRecordForm={showRecordForm}
          setShowRecordForm={setShowRecordForm}
        />{" "}
      </div>
    </>
  );
}

export default Header;
