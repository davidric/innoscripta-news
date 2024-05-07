import { Link } from 'react-router-dom';
import { TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import bookmark from '../images/bookmark.svg';
import '../styles/Navbar.css';
import { useGlobalStore } from '../store';

const Navbar = () => {
  const { keyword, setKeyword } = useGlobalStore();

  return (
    <nav className="component-navbar">
      <Link to="/" className="logo">
        INEWS
      </Link>
      <div className="flex">
        <div className="mx-6">
          <div className="max-w-md">
            <TextInput
              id="search"
              type="text"
              rightIcon={HiSearch}
              placeholder="Search anything..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>
        <button>
          <img src={bookmark} alt="bookmark" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
