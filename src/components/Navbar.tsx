import { Link } from 'react-router-dom';
import bookmark from '../images/bookmark.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="component-navbar">
      <Link to="/" className="logo">
        INEWS
      </Link>
      <div className="flex">
        <div className="mx-6">
          <input type="text" placeholder="Search anything..." />
        </div>
        <button>
          <img src={bookmark} alt="bookmark" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
