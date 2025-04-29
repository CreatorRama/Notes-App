import { Link } from 'react-router-dom';

const Nav = () => {
  // Why this nav approach for simplicity:
  // Basic tab-style navigation is sufficient for this small app with only two views
  return (
    <nav className="app-nav">
      <Link to="/">Add Note</Link>
      <Link to="/notes">View Notes</Link>
    </nav>
  );
};

export default Nav;