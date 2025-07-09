"use client";
import Image from "next/image";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <nav className="bg-primary text-white mx-4 h-16 flex items-center justify-between">
        <button
          className="cursor-pointer"
          onClick={(e) => {
            // setSidebarOpen(true);
          }}
        >
          <Image
            className="rounded-md p-2 hover:bg-slate-800"
            src="/assets/icons/sidebar-btn.svg"
            width={36}
            height={36}
            alt="Open/close sidebar"
            priority={true}
          />
        </button>

        <Image
          className="mx-2"
          src="/assets/logos/logo-small-light.svg"
          width={32}
          height={32}
          alt="Liberty Logo"
          priority={true}
        />
      </nav>
    </>
  );
}
