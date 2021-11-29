import React, { useState, useEffect } from "react";
import Data from "./Data";

const DataContainer = ({ tick }) => {
  const [stonk, setStonk] = useState("");
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${tick}&apikey=CTX2WO0FQCN6V3F4`;

  useEffect(() => {
    if (tick) {
      console.log("fetching", url);
      fetch(url)
        .then((r) => r.json())
        .then((data) => {
          console.log("dataObj", data);
          setStonk(data);
        });
    }
  }, [tick]);

  return (
    <div>
      <Data stonks={stonk} />
    </div>
  );
};

export default DataContainer;

