import { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [message, setMessage] = useState("");

  const showSnackbar = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 10000);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {message && (
        <div className="fixed top-4 right-4 z-50 bg-red-500 p-4 rounded-sm text-slate-50 shadow-md">
          <span className="bg-"></span>
          <div className="drop-shadow-sm">{message}</div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
