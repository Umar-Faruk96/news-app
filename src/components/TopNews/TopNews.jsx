import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Row } from "react-bootstrap";

const TopNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    //? fetch news from https://newsapi.org/v2/everything?q=keyword&from=2023-05-18&apiKey=f0694b3a448f4edaa0b4fb363377a7cd
    const url =
      "https://newsapi.org/v2/everything?q=keyword&from=2023-05-18&apiKey=f0694b3a448f4edaa0b4fb363377a7cd";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  const newsPublished = news.slice(0, 16);

  return (
    <>
      <h2 className="text-info text-center mt-3 mb-4 fs-4">
        Top News Today : {newsPublished.length}
      </h2>
      <Row lg={4} className="g-3">
        {newsPublished.map((article) => (
          <NewsCard article={article} key={article.publishedAT} />
        ))}
      </Row>
    </>
  );
};

export default TopNews;
