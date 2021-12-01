import React from "react";

const MarketComparison = ({ market, time }) => {
  if (!market) return <div>Select an ETF above to see market comparison</div>;
  let timeCap =
    time == "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  if (!market[`${timeCap} Time Series`] && !market[`Time Series ${timeCap}`]) return <div>Loading.....</div>;
  console.log(timeCap, "In Market Comp")
  const mrktDates =
    timeCap == "(Daily)"
      ? Object.keys(market[`Time Series ${timeCap}`]).slice(0, 10)
      : Object.keys(market[`${timeCap} Time Series`]).slice(0, 10);
  console.log(mrktDates, "second")
  return (
    <>
    <h3>{market["Meta Data"]["2. Symbol"]} Close</h3>
    {timeCap == "(Daily)" ? (
      <div>
        {mrktDates.map((d, s) => (
          <div>
            {d} - {market[`Time Series ${timeCap}`][mrktDates[s]]["4. close"]}
          </div>
        ))}
      </div>
    ) : (
      <div>
        {mrktDates.map((d, s) => (
          <div>
            {d} - {market[`${timeCap} Time Series`][mrktDates[s]]["4. close"]}
          </div>
        ))}
      </div>
    )}
  </>
);
};

export default MarketComparison;
