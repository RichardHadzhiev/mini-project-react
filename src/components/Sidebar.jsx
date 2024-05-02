import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="./AboutPage">About</Link>
        </span>
      </div>
    </nav>
  );
}

export default Sidebar;
