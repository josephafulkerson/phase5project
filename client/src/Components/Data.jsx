import React, { useState } from "react";
import IndexComparison from "./IndexComparison";
import MarketComparison from "./MarketComparison";
import { Bar } from "react-chartjs-2";

const Data = ({ stonks, index, market, time, tick, currentUser }) => {
  const [bttnClick, setBttnClick] = useState(false);
  if (!stonks) return <div>Select a Stock to View</div>;
  let timeCap =
    time === "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  console.log(timeCap, "first");
  console.log("stonky", stonks);
  if (!stonks[`${timeCap} Time Series`] && !stonks[`Time Series ${timeCap}`])
    return <div>Loading.....</div>;

  const dates =
    timeCap === "(Daily)"
      ? Object.keys(stonks[`Time Series ${timeCap}`]).slice(0, 12)
      : Object.keys(stonks[`${timeCap} Time Series`]).slice(0, 12);

  function handleAdd() {
    setBttnClick(true);
    fetch("/watchlist_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: tick,
        date: dates[0],
        high: stonks[`Time Series ${timeCap}`][dates[0]]["2. high"],
        low: stonks[`Time Series ${timeCap}`][dates[0]]["3. low"],
        close: stonks[`Time Series ${timeCap}`][dates[0]]["4. close"],
        user_id: currentUser.id,
      }),
    });
  }

  return (
    <>
      <h3>{stonks["Meta Data"]["2. Symbol"]} Close</h3>
      {timeCap === "(Daily)" ? (
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

      {timeCap === "(Daily)" ? (
        <button onClick={handleAdd}>
          {bttnClick ? "Added to profile ✅" : `Add ${tick} to profile`}{" "}
        </button>
      ) : null}
      <IndexComparison index={index} time={time} />
      <MarketComparison market={market} time={time} />
    </>
  );
};

export default Data;

{
  /* <Bar
          data={{
            labels: ["Bink", "Gimme"],
            datasets: [{
              label: "closing Price",
              data: 
            }]
          }}
          height={50}
          width={50}
          options={{
            maintainAspectRatio: false
          }}
        /> */
}
