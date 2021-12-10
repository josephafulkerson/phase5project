import React from "react";
import { Line } from "react-chartjs-2";

const IndexComparison = ({ index, time }) => {
  if (!index) return <div className="index">Select a Comparison Index</div>;
  let timeCap =
    time === "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  console.log(timeCap, "In index")
    if (!index[`${timeCap} Time Series`] && !index[`Time Series ${timeCap}`]) return <div>Loading.....</div>;

  let etfDates =
  timeCap === "(Daily)"
    ? Object.keys(index[`Time Series ${timeCap}`]).slice(0, 12)
    : Object.keys(index[`${timeCap} Time Series`]).slice(0, 12);
  console.log(etfDates, "In index")
  return (
    <div className="index">
       <Line
        data={{
          datasets: [
            {
              label: `${index["Meta Data"]["2. Symbol"]} ${timeCap} Closing Price`,
              data: etfDates
                .reverse()
                .map((d) => ({
                  x: d,
                  y: index[
                    timeCap === "(Daily)"
                      ? `Time Series ${timeCap}`
                      : `${timeCap} Time Series`
                  ][d]["4. close"],
                })),
                backgroundColor: [
                'rgba(54, 162, 235, 0.9)',
                
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
  </div>
);
};

export default IndexComparison;
