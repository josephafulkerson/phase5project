import React, { useState, useEffect } from "react";

const ProfileData = ({ tickers }) => {
  const [news, setNews] = useState(null);
  console.log(tickers);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?sources=Bloomberg, Reuters&q=${tickers.join(
        " Stock AND "
      )} Stock &sortBy=popularity&apiKey=b58620b0fadd46c3a1249c063789a726`
    )
      .then((r) => r.json())
      .then((data) => setNews(data));
  }, []);
  
  
  console.log(news);
  

  return (
    <>
    <br />
      <div style={{ display: "flex", maxWidth: "90vw", padding: '3px', overflow: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
        {news &&
          news.articles &&
          news.articles.map((article) => (
            <div style={{ padding: '10px', textalign: 'center'}}>
              <a href={article.url}><img height="170" width="210" src={article.urlToImage} id="img"/></a>
              <div>{article.title}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProfileData;
