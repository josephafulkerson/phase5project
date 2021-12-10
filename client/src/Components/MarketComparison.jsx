import React from "react";
import { Line } from "react-chartjs-2";

const MarketComparison = ({ market, time }) => {
  if (!market) return <><br /><div className="market">Select an ETF above to see market comparison</div></>;
  let timeCap =
    time === "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  if (!market[`${timeCap} Time Series`] && !market[`Time Series ${timeCap}`]) return <div>Loading.....</div>;
  console.log(timeCap, "In Market Comp")
  const mrktDates =
    timeCap ==="(Daily)"
      ? Object.keys(market[`Time Series ${timeCap}`]).slice(0, 12)
      : Object.keys(market[`${timeCap} Time Series`]).slice(0, 12);
  console.log(mrktDates, "second")
  return (
    <div className="market">
      <br/>
      <br/>
    <Line
        data={{
          datasets: [
            {
              label: `${market["Meta Data"]["2. Symbol"]} ${timeCap} Closing Price`,
              data: mrktDates
                .reverse()
                .map((d) => ({
                  x: d,
                  y: market[
                    timeCap === "(Daily)"
                      ? `Time Series ${timeCap}`
                      : `${timeCap} Time Series`
                  ][d]["4. close"],
                })),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.9)'
                ]
            },
          ],
        }}
        height={50}
        width={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
      <br />
      <br />
  </div>
);
};

export default MarketComparison;
