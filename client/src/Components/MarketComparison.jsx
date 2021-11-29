import React from "react";

const MarketComparison = ({ market }) => {
  if (!market) return <div>Select an ETF above to see market comparison</div>;
  const mrktDates = Object.keys(market["Weekly Time Series"]).slice(0, 10);

  return (
    <div>
      <h3>Market Comparison</h3>
      {mrktDates.map((d, s) => (
        <div>
          {d} - {market["Weekly Time Series"][mrktDates[s]]["4. close"]}
        </div>
      ))}
    </div>
  );
};

export default MarketComparison;
