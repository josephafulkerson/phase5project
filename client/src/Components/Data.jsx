import React from "react";
import IndexComparison from "./IndexComparison";
import MarketComparison from "./MarketComparison";

const Data = ({ stonks, index, market, time }) => {
  if (!stonks) return <div>Select a Stock to View</div>;
  let timeCap =
    time == "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  console.log(timeCap, 'first')
  if (!stonks[`${timeCap} Time Series`] && !stonks[`Time Series ${timeCap}`]) return <div>Loading.....</div>;

  const dates =
    timeCap == "(Daily)"
      ? Object.keys(stonks[`Time Series ${timeCap}`]).slice(0, 10)
      : Object.keys(stonks[`${timeCap} Time Series`]).slice(0, 10);
  console.log(dates, '2')

  return (
    <>
      <h3>{stonks["Meta Data"]["2. Symbol"]} Close</h3>
      {timeCap == "(Daily)" ? (
        <div>
          {dates.map((d, s) => (
            <div>
              {d} - {stonks[`Time Series ${timeCap}`][dates[s]]["4. close"]}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {dates.map((d, s) => (
            <div>
              {d} - {stonks[`${timeCap} Time Series`][dates[s]]["4. close"]}
            </div>
          ))}
        </div>
      )}
      <IndexComparison index={index} time={time} />
      <MarketComparison market={market} time={time} />
    </>
  );
};

export default Data;
