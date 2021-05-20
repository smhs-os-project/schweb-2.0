import React from "react";
import Link from "next/link";
// import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="px-8 py-4 grid grid-col-1 md:grid-col-3 content-center items-center">
      <div className="col-start-1 col-end-1 hidden md:block">
        <Link href="/">SCHWEB</Link>
      </div>
      <div className="col-start-1 md:col-start-2 col-end-2">
        {/* <SearchBar /> */}
      </div>
    </div>
  );
}
