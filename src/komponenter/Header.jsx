import { Link } from "react-router-dom";
import "../styles/index.scss";

function Header() {
  return (
    <header className="site-header">
      <div className="team-name">Team 15</div>
      <nav>
        <Link to="/">Hjem</Link>
        <Link to="/medlem/3d59926e-b4b3-4610-ac20-dc8d9b60302e">Sajad</Link>
      </nav>
    </header>
  );
}

export default Header;
