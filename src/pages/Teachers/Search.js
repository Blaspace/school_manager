/** @format */

import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

function Search({ setSearch }) {
  return (
    <section className="search">
      <section>
        <span>Classes</span> <RiArrowDropDownLine size={20} />
      </section>
      <div>
        <span>
          <BiSearch size={20} />
        </span>
        <input
          type="text"
          placeholder="Search teachers by name or email"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
}

export default Search;
