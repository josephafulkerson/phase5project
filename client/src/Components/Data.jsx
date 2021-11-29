import React from "react";
import IndexComparison from "./IndexComparison";
import MarketComparison from "./MarketComparison";

const Data = ({ stonks, index, market }) => {
  if (!stonks) return <div>Select a Stock to View</div>;
  const dates = Object.keys(stonks["Weekly Time Series"]).slice(0, 10);

  return (
      <>
      <h3>Stock Close</h3>
      <div>
        {dates.map((d, s) => (
          <div>
            {d} - {stonks["Weekly Time Series"][dates[s]]["4. close"]}
          </div>
        ))}
      </div>
      <IndexComparison index={index}/>
      <MarketComparison market={market}/>
      </>
  );
};

export default Data;
