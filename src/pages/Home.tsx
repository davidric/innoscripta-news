import { Link } from 'react-router-dom';
import '../styles/Home.css';
import mainBackground from '../images/main-background.png';

const Home = () => {
  return (
    <div className="page-home">
      <div className="container">
        <div className="main-slider">
          <img src={mainBackground} alt="Main Background" />
          <div className="main-slider-text-group">
            <h3 className=" text-lg">WELCOME TO INEWS</h3>
            <h1>The Latest And Most Trusted News</h1>
            <p>
              Welcome to INEWS, the primary source for the latest news and reliable information from around the world.
              From politics to entertainment, we provide the news you need, anytime and anywhere.
            </p>
          </div>
        </div>
        <p>Home</p>
        <Link to="/article" className="underline">
          Go to article
        </Link>
      </div>
    </div>
  );
};

export default Home;
