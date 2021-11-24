import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [stonk, setStonk] = useState(0);
  const [tick, setTick] = useState("");
  // const tickerRef = useRef("")

  function findStocks(ticker) {
    useEffect(() => {
      fetch(
        `http://api.marketstack.com/v1/eod?access_key=5c8d9e96ece3e7029740ad3d43ea284b& symbols=${ticker}& date_from=2021-11-13&date_to=2021-11-23`
      )
        .then((r) => r.json())
        .then((data) => setStonk(data.data));
    }, []);
  }

  function handleSubmit(e) {
    e.preventDefault();
    findStocks(e.target.value);
  }

  console.log(stonk);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select>
          <option value="F">Ford</option>
          <option value="GM">General Motors</option>
          <option value="TSLA">Tesla</option>
        </select>
      </form>
      {stonk.map((s) => (
        <Test stonks={s} findStocks={findStocks} />
      ))}
    </div>
  );
};

export default Home;
