import moment from 'moment';
import { useQuery } from 'react-query';
import { toTitleCase } from '../helper/utils';
import mediaSource from '../helper/media_sources.json';
// import newsApiMock from '../mock/top-headlines.json';
import { useDebounce } from './useDebounce';
import { useGlobalStore } from '../store';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  timeAgo: string;
  content: string | null;
  category: string;
}

export interface NewsResult {
  articles: Article[];
  status: string;
  totalResults: number;
}

const useNews = () => {
  const { filter, keyword, page } = useGlobalStore();
  const params = { filter, keyword, page };
  const debouncedParams = useDebounce(JSON.stringify(params));

  const getNewsNewsApi: () => Promise<NewsResult> = async () => {
    const url = keyword
      ? `https://newsapi.org/v2/everything?pageSize=20&page=${page}&q=${keyword}&from=${filter.date}&to=${filter.date}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${page}&category=${filter.category}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;

    const response: NewsResult = (await fetch(url).then((res) => res.json())) || [];

    // const response = newsApiMock;

    const articles: Article[] = response.articles.map((article) => ({
      ...article,
      publishedAt: moment(article.publishedAt).format('DD MMM YYYY'),
      timeAgo: moment(article.publishedAt).fromNow(),
      author: toTitleCase(article.author),
      category: toTitleCase(
        mediaSource.find((s) => s.id === article.source.id || s.name === article.source.name)?.category || 'General',
      ),
    }));

    const filteredArticles = articles.filter((article) => !!article.description && !!article.urlToImage);

    const data = { ...response, articles: filteredArticles };
    return data;
  };

  const {
    isLoading,
    error,
    data: newsData,
  } = useQuery<NewsResult, Error>(['newsAPI', debouncedParams], () => getNewsNewsApi(), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const totalPages: number = Math.ceil(newsData?.totalResults ? newsData.totalResults / 20 : 1);

  return { newsData, totalPages, isLoading, error };
};

export default useNews;
