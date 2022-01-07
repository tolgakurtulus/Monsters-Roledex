import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="c-input"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
