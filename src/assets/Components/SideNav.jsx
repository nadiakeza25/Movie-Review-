import React from 'react';
import { Link } from "react-router-dom";
import './SideNav.css'


function SideNav() {
  return (
    <>
      <div className="SideNav">
        <Link to="/" style={{ color: "white" }}>
          Movies
        </Link>
        <Link to="/create" style={{color: "white"}}>
            Add Movies
        </Link>
      </div>
    </>
  );
}

export default SideNav;
