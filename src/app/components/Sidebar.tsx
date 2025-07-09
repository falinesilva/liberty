"use client";
import { useState } from "react";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenSidebar(!open)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        ☰
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 mt-12">
          <a href="/dashboard">Dashboard</a>
          <a href="/assets">Assets</a>
          <a href="/liabilities">Liabilities</a>
          <a href="/expenses">Expenses</a>
        </nav>
      </aside>
    </>
  );
}
