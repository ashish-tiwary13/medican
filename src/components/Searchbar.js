import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Searchbar = () => {
  const [scrollsearchbar, setscrollsearchbar] = useState("110px");
  const [scrollheight, setscrollheight] = useState("70px");
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      if (110 - scroll > 40) {
        setscrollsearchbar(110 - scroll + "px");
        setscrollheight(70 - scroll + "px");
        console.log(110 - scroll + "px");
      } else {
        setscrollsearchbar("40px");
        setscrollheight("0px");
        console.log("done");
      }
    });

    return () => {
      window.removeEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if (110 - scroll > 40) {
          setscrollsearchbar(110 - scroll + "px");
          setscrollheight(70 - scroll + "px");
          console.log(110 - scroll + "px");
        } else {
          setscrollsearchbar("40px");
          setscrollheight("0px");
          console.log("done");
        }
      });
    };
  }, []);
  return (
    <>
      <div className="searchbar" style={{ height: `${scrollheight}` }}>
        <div
          className="searchcomponents"
          style={{ position: "absolute", top: `${scrollsearchbar}` }}
        >
          <form className="d-flex do" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for medicines, health products, etc . . ."
              aria-label="Search"
            />
            <Link className="do" to="/results">
              <button className="btn btn-outline" type="submit">
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
