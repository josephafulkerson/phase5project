import React, { useState } from "react";
import DataContainer from "./DataContainer";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';

const stockOptions = [
  { ticker: "IBM", company: "IBM" },
  { ticker: "F", company: "Ford" },
  { ticker: "GM", company: "General Motors" },
  { ticker: "TSLA", company: "Tesla" },
];

const etfOptions = [
    { symbol: "VDE", name: "Vanguard Energy Index Fund ETF" },
    { symbol: "CARZ", name: "First Trust NASDAQ Global Auto Index ETF" }
];

const mrktOptions = [
    { symbol: "SPY", name: "SPDR S&P 500 ETF Trust" },
    { symbol: "DIA", name: "SPDR Dow Jones Industrial Average ETF Trust" },
    { symbol: "QQQ", name: "Invesco QQQ Trust Series 1" }
]

const Home = ({currentUser}) => {
  const [tick, setTick] = useState("");
  const [etf, setEtf] = useState("");
  const [mrkt, setMrkt] = useState("");
  const [time, setTime] = useState("DAILY")

  return (
  //   <FormControl sx={{ width: 500 }}>
  //   <InputLabel id="demo-simple-select-label">
  //     Filter By Party
  //   </InputLabel>
  //   <Select
  //     labelId="demo-simple-select-label"
  //     id="demo-simple-select"
  //     label="Filter By Party"
  //     onChange={(e) => setParty(e.target.value)}
  //   >
  //     <MenuItem value="R">Republican</MenuItem>
  //     <MenuItem value="D">Democrat</MenuItem>
  //     <MenuItem value="independent">Independent</MenuItem>
  //   </Select>
  // </FormControl>
    <div>
     
      <FormControl variant="standard" sx={{ m: 1, minWidth: 140  }}>
        <InputLabel>
        Select Stock
        </InputLabel>
        <Select 
        label="Select Stock"
        onChange={(e) => setTick(e.target.value)}>
          {stockOptions.map(({ ticker, company }) => (
            <MenuItem value={ticker}>{company}</MenuItem>
          ))}
        </Select>
      </FormControl>
  
      <FormControl variant="standard" sx={{ m: 1, minWidth: 230  }}>
        <InputLabel>
        Select Comparison Index
        </InputLabel>
        <Select onChange={(e) => setEtf(e.target.value)}>
          {etfOptions.map(({ symbol, name }) => (
            <MenuItem value={symbol}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
        <InputLabel>
        Compare to Market
        </InputLabel>
        <Select onChange={(e) => setMrkt(e.target.value)}>
          {mrktOptions.map(({ symbol, name }) => (
            <MenuItem value={symbol}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
      <InputLabel>
        Time Interval
        </InputLabel>
        <Select onChange={(e) => setTime(e.target.value)}>
          <MenuItem value="DAILY">Daily</MenuItem>
          <MenuItem value="WEEKLY">Weekly</MenuItem>
          <MenuItem value="MONTHLY">Monthly</MenuItem>
        </Select>
      </FormControl>
      <DataContainer tick={tick} etf={etf} mrkt={mrkt} time={time} currentUser={currentUser} />
    </div>
  );
};

export default Home;

// const [tick, setTick] = useState(stockOptions[0].ticker)
