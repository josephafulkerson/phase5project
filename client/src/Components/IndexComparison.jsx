import React from "react";

const IndexComparison = ({ index }) => {
  if (!index) return <div>Select a Comparison Index</div>;
  const etfDates = Object.keys(index["Weekly Time Series"]).slice(0, 10);

  return (
    <div>
      <h3>Index Close</h3>
      {etfDates.map((d, s) => (
        <div>
          {d} - {index["Weekly Time Series"][etfDates[s]]["4. close"]}
        </div>
      ))}
    </div>
  );
};

export default IndexComparison;
