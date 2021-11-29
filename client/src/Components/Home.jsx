import React, { useState, useEffect, useRef } from "react";
import DataContainer from "./DataContainer";

const stockOptions = [
  { ticker: "IBM", company: "IBM" },
  { ticker: "F", company: "Ford" },
  { ticker: "GM", company: "General Motors" },
  { ticker: "TSLA", company: "Tesla" },
];

const etfOptions = [{ symbol: "VDE", name: "Vanguard Energy Index Fund ETF" }];

const mrktOptions = [
    { symbol: "SPY", name: "SPDR S&P 500 ETF Trust" },
    { symbol: "DIA", name: "SPDR Dow Jones Industrial Average ETF Trust" },
    { symbol: "QQQ", name: "Invesco QQQ Trust Series 1" }
]

const Home = () => {
  const [tick, setTick] = useState("");
  const [etf, setEtf] = useState("");
  const [mrkt, setMrkt] = useState("");

  return (
    <div>
      <form onChange={(e) => setTick(e.target.value)}>
        <select>
          <option value="" disabled selected hidden>
            Select Stock
          </option>
          {stockOptions.map(({ ticker, company }) => (
            <option value={ticker}>{company}</option>
          ))}
        </select>
      </form>
      <form onChange={(e) => setEtf(e.target.value)}>
        <select>
          <option value="" disabled selected hidden>
            Select Comparison Index
          </option>
          {etfOptions.map(({ symbol, name }) => (
            <option value={symbol}>{name}</option>
          ))}
        </select>
      </form>
      <form onChange={(e) => setMrkt(e.target.value)}>
        <select>
          <option value="" disabled selected hidden>
            Compare to Market
          </option>
          {mrktOptions.map(({ symbol, name }) => (
            <option value={symbol}>{name}</option>
          ))}
        </select>
      </form>
      <DataContainer tick={tick} etf={etf} mrkt={mrkt} />
    </div>
  );
};

export default Home;

// const [tick, setTick] = useState(stockOptions[0].ticker)
