import { Card, Pagination } from 'flowbite-react';
import '../styles/Articles.css';
import { NewsResult } from '../hooks/useNews';
import { useGlobalStore } from '../store';

interface Props {
  data?: NewsResult;
  totalPages: number;
}
const Articles = ({ data, totalPages }: Props) => {
  const { page, setPage } = useGlobalStore();

  const onPageChange = (page: number) => setPage(page);

  return (
    <div className="component-articles">
      <div className="articles">
        {data?.articles?.map((article, i) => (
          <Card key={i} className="card" imgAlt={article.title} imgSrc={article.urlToImage || ''}>
            <div className="footer-text">
              <span className="category">{article.category}</span> {article.author && '•'}{' '}
              <span className="author">{article.author}</span>
            </div>
            <h5 className="article-title">{article.title}</h5>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.icon-icons.com/icons2/70/PNG/512/bbc_news_14062.png"
                alt="source"
                width={24}
                height={24}
              />
              <span className="article-meta-data">
                {article.source.name} • {article.publishedAt}
              </span>
            </div>

            <p className="article-description">{article.description}</p>
          </Card>
        ))}
      </div>
      <div className="pagination">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} showIcons />
      </div>
    </div>
  );
};

export default Articles;
