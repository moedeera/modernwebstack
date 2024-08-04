import React, { useEffect, useContext, useRef } from "react";
import "./SearchBlock.css";
import { siteContext } from "../../Context/Context";

const SearchBlock = () => {
  const { searchPage, setSearchPage } = useContext(siteContext);
  const searchBlockRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchBlockRef.current &&
      !searchBlockRef.current.contains(event.target)
    ) {
      setSearchPage(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {searchPage && (
        <div className="search-block-container">
          <div className="search-block-box" ref={searchBlockRef}></div>
        </div>
      )}
    </>
  );
};

export default SearchBlock;
