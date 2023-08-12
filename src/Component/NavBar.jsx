import { Link } from "react-router-dom";

import "./NavBar.css";
import { useState } from "react";




const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className={
        isNavExpanded ? "full-navbar expanded" : "full-navbar"
      }>
          <button
        className="screen-roll"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>
        
      <ul>

        <li>
          <Link to={"/"}>Home 🛖</Link>
        </li>

        <li>
          <Link to={"/shows"}>All Shows: 🎪</Link>
        </li>

        <li>
          <Link to={"/movies"}>All Movies: 🎬</Link>
        </li>

      </ul>
    
    </div>
  );
};

export default NavBar;
