import React from "react";

const IndexComparison = ({ index, time }) => {
  if (!index) return <div>Select a Comparison Index</div>;
  let timeCap =
    time == "DAILY" ? "(Daily)" : time.charAt(0) + time.slice(1).toLowerCase();
  console.log(timeCap, "In index")
    if (!index[`${timeCap} Time Series`] && !index[`Time Series ${timeCap}`]) return <div>Loading.....</div>;

  let etfDates =
  timeCap == "(Daily)"
    ? Object.keys(index[`Time Series ${timeCap}`]).slice(0, 10)
    : Object.keys(index[`${timeCap} Time Series`]).slice(0, 10);
  console.log(etfDates, "In index")
  return (
    <>
    <h3>{index["Meta Data"]["2. Symbol"]} Close</h3>
    {timeCap == "(Daily)" ? (
      <div>
        {etfDates.map((d, s) => (
          <div>
            {d} - {index[`Time Series ${timeCap}`][etfDates[s]]["4. close"]}
          </div>
        ))}
      </div>
    ) : (
      <div>
        {etfDates.map((d, s) => (
          <div>
            {d} - {index[`${timeCap} Time Series`][etfDates[s]]["4. close"]}
          </div>
        ))}
      </div>
    )}
  </>
);
};

export default IndexComparison;
