import { Link } from 'react-router-dom';
import { Button, Datepicker, Select } from 'flowbite-react';
import '../styles/Home.css';
import mainBackground from '../images/main-background.png';
import markerRed from '../images/marker-red.svg';
import Articles from '../components/Articles';
import { useGlobalStore } from '../store';
import useNews from '../hooks/useNews';

const Home = () => {
  const { newsData, totalPages } = useNews();
  const { keyword } = useGlobalStore();

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
        <div className="news-label">
          <img src={markerRed} alt="marker" />
          <h3>{keyword ? 'Search For' : 'Popular posts'}</h3>
        </div>
        <div className="section-filter">
          <div className="search-label">
            {keyword && newsData?.articles?.length && (
              <>
                <h2>“ {keyword} “</h2>
                <p>{newsData.totalResults || 0} Result</p>
              </>
            )}
          </div>

          <div className="filter">
            <Datepicker maxDate={new Date()} />
            <Select id="categories" required>
              <option>Categories</option>
              <option>Style</option>
              <option>Health</option>
              <option>Political</option>
            </Select>
            <Select id="sources" required>
              <option>Select Source</option>
              <option>Inews</option>
              <option>BBC</option>
              <option>News Creation</option>
            </Select>
            <Button color="light">Reset</Button>
            <Button>Apply</Button>
          </div>
        </div>
        <div className="section-articles">
          <Articles data={newsData} totalPages={totalPages} />
        </div>
        <Link to="/article" className="underline">
          Go to article
        </Link>
      </div>
    </div>
  );
};

export default Home;
