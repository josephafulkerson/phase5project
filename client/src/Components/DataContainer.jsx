import React, { useState, useEffect } from "react";
import Data from "./Data";

const DataContainer = ({ tick, etf, mrkt, time, currentUser }) => {
  const [stonk, setStonk] = useState("");
  const [index, setIndex] = useState("")
  const [market, setMarket] = useState("")

  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_${time}&symbol=${tick}&apikey=CTX2WO0FQCN6V3F4`;
  let etfUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_${time}&symbol=${etf}&apikey=AGZL3K79BXVZZVE3`;
  let marketUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_${time}&symbol=${mrkt}&apikey=PC63WXEF9GOBXQ7B`;


  useEffect(() => {
    if (tick) {
      fetch(url)
        .then((r) => r.json())
        .then((data) => {
          setStonk(data);
        });
    }
  }, [tick, time, url]);

  useEffect(() => {
    if (etf) {
      fetch(etfUrl)
        .then((r) => r.json())
        .then((data) => {
          setIndex(data);
        });
    }
  }, [etf, time, etfUrl]);

  useEffect(() => {
    if (mrkt) {
      fetch(marketUrl)
        .then((r) => r.json())
        .then((data) => {
          setMarket(data);
        });
    }
  }, [mrkt, time, marketUrl]);



  return (
    <div >
      <Data stonks={stonk} index={index} market={market} time={time} tick={tick} currentUser={currentUser}/>
    </div>
  );
};

export default DataContainer;

