/** @format */

import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

function Search({ setSearch }) {
  return (
    <section className="search">
      
      <div>
        <span>
          <BiSearch size={20} />
        </span>
        <input
          type="text"
          placeholder="Search teachers by name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
}

export default Search;
