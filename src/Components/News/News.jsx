import React, { useEffect, useState } from "react";
import newsDetails from "../../API/NewsApi";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const newsData = await newsDetails();
    console.log(newsData)
    setNews(newsData);
  };

  return (
    <div
      style={{
        height: "0vh",
        width: "30vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}>
      <img
        src={news.urlToImage}
        style={{ height: "60vh", borderRadius: "12px", width: "30vw" }}
        alt="News cover"
      />
      <div
        style={{
          height: "20vh",
          borderRadius: "12px",
          width: "30vw",
          background: "white",
          fontSize: "1.2rem",
          padding: "6px",
        }}>
        {news.description}
      </div>
      <div
        style={{
          position: "absolute",
          width: "30vw",
          height: "30vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "31vh",
          padding: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}>
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}>
          {news.title}
        </p>
      </div>
    </div>
  );
};

export default News;
