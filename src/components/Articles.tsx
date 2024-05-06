import { Card } from 'flowbite-react';
import '../styles/Articles.css';
import imgRoom from '../images/room.jpg';

const Articles = () => {
  const data = Array.from({ length: 20 });

  return (
    <div className="component-articles">
      {data?.map((article, i) => (
        <Card key={i} className="cmax-w-sm" imgAlt="Meaningful alt text for an image" imgSrc={imgRoom}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Opening Day of Boating Season, Seattle WA
          </h5>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.icon-icons.com/icons2/70/PNG/512/bbc_news_14062.png"
              alt="source"
              width={24}
              height={24}
            />
            <span className="article-meta-data">BBC • 07 May 2024</span>
          </div>

          <p className="article-description">
            Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand
            Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake
            Bridge
          </p>
          <div className="footer-text">
            <span>Sport</span> • 8 Min Read
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Articles;
