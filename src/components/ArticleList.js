import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';

export default function ArticleList() {
  /*   const data = [
    {
      id: 1,
      title: 'What is React all about?',
      body: 'React is all about one-way data flow, the Virtual DOM, and transpiling JSX.',
    },
    {
      id: 2,
      title: 'A lovely kid',
      body: 'In fact, a kid is also the name of a baby goat!',
    },
    {
      id: 3,
      title: 'On placeholder image URLs',
      body: "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]; */

  const request = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
    const response = await axios.get(url);

    console.log('the response: ', response.data);

    setArticles(response.data);
  };

  const [articles, setArticles] = useState([]);

  const erase = () => setArticles([]);
  // const restore = () => setArticles();

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <button onClick={erase}>ERASE</button>
      {/* <button onClick={restore}>RESTORE</button> */}
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.body}
        />
      ))}
    </div>
  );
}
