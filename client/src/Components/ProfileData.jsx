import React, { useState, useEffect } from "react";

const ProfileData = () => {
  const [news, setNews] = useState(null);
  
 
  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => setNews(data));
  }, []);
  
  
  
  
if (!news) return <div>Sorry, current financial news not at this time</div>
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
