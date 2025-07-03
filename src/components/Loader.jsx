import { ReactComponent as Logo } from "../assets/LogoSmall.svg";

function Loader() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center h-screen">
        <Logo className="h-16" />

        <div className="loader"></div>
      </div>
    </>
  );
}

export default Loader;
