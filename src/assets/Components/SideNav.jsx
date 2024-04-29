import { Link } from "react-router-dom";
import './SideNav.css'


function SideNav() {
  return (
    <>
      <div className="SideNav">
        <div className="nav_li">
            <img
          className="logo"
          src="https://data.textstudio.com/output/sample/animated/6/9/5/6/netflix-1-16596.gif"
          alt="logo"
        />
        <Link to="/" style={{ color: "white" }}>
          Movies
        </Link>
        <Link to="/create" style={{color: "white"}}>
            Add Movies
        </Link>
        </div>
      </div>
    </>
  );
}

export default SideNav;
