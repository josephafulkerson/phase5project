import React, { useState, useEffect, useRef } from "react";
import DataContainer from "./DataContainer";

const stockOptions = [
  { ticker: "F", company: "Ford" },
  { ticker: "GM", company: "General Motors" },
  { ticker: "TSLA", company: "Tesla" },
];

const Home = () => {
  const [tick, setTick] = useState(stockOptions[0].ticker);

  return (
    <div>
      <form onChange={(e) => setTick(e.target.value)}>
        <select>
          {stockOptions.map(({ ticker, company }) => (
            <option value={ticker}>{company}</option>
          ))}
        </select>
      </form>
      <DataContainer tick={tick}/>
    </div>
  );
};

export default Home;
