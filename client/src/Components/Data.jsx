import React, { useState } from "react";
import IndexComparison from "./IndexComparison";
import MarketComparison from "./MarketComparison";
import { Line } from "react-chartjs-2";

const Data = ({ stonks, index, market, time, tick, currentUser }) => {
  const [bttnClick, setBttnClick] = useState(false);
  if (!stonks) return <div className="stonks">Select a Stock to View</div>;
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
        date: dates[11],
        high: stonks[`Time Series ${timeCap}`][dates[11]]["2. high"],
        low: stonks[`Time Series ${timeCap}`][dates[11]]["3. low"],
        close: stonks[`Time Series ${timeCap}`][dates[11]]["4. close"],
        user_id: currentUser.id,
      }),
    });
  }

  return (
    <>
    <div className="stock">
      {timeCap === "(Daily)" ? (
        <p onClick={handleAdd}>{bttnClick ? "✅" : `👀`} </p>
      ) : null}

      <Line
        data={{
          datasets: [
            {
              label: `${tick} ${timeCap} Closing Price`,
              data: dates.reverse().map((d) => ({
                x: d,
                y: stonks[
                  timeCap === "(Daily)"
                    ? `Time Series ${timeCap}`
                    : `${timeCap} Time Series`
                ][d]["4. close"],
              })),
              backgroundColor: ["rgba(255, 159, 64, 0.9)"],
            },
          ],
        }}
        height={50}
        width={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
      </div>
      <IndexComparison index={index} time={time} />
      <MarketComparison market={market} time={time}/>
    </>
  );
};

export default Data;
