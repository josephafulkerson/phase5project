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
  { ticker: "AAPL", company: "Apple" },
  { ticker: "MSFT", company: "Microsoft" },
  { ticker: "GOOG", company: "Google" },
  { ticker: "AMZN", company: "Amazon" },
  { ticker: "FB", company: "Meta" },
  { ticker: "JPM", company: "JP Morgan" },
  { ticker: "WMT", company: "Wal-Mart" },
  { ticker: "HD", company: "Home Depot" },
  { ticker: "JNJ", company: "Johnson & Johnson" },
  { ticker: "NFLX", company: "Netflix" },
  { ticker: "NKE", company: "Nike" },
  { ticker: "XOM", company: "Exxon Mobile" },
  { ticker: "PLTR", company: "Palantir" },
  { ticker: "BRK-A", company: "Berkshire-Hathaway" },
  { ticker: "PG", company: "Proctor & Gamble" },
  { ticker: "CSCO", company: "Cisco" },
  { ticker: "ORCL", company: "Oracle" },
  { ticker: "CVX", company: "Chevron" },
  { ticker: "KO", company: "Coca-Cola" },
  { ticker: "ABT", company: "Abbot Laboratories" },
  { ticker: "TMO", company: "Thermo Fisher Scientific" },
  { ticker: "CRM", company: "Salesforce" },
  { ticker: "ADBE", company: "Adobe" },
  { ticker: "MA", company: "Mastercard" },
  { ticker: "DIS", company: "Walt Disney" },
  { ticker: "AMD", company: "AMD" },


];

const etfOptions = [
    { symbol: "VDE", name: "Vanguard Energy Index Fund ETF" },
    { symbol: "CARZ", name: "First Trust NASDAQ Global Auto Index ETF" },
    { symbol: "XLK", name: "Technology Select Sector SPDR Fund" },
    { symbol: "FNCL", name: "Fidelity MSCI Financials Index ETF" },
    { symbol: "PSI", name: "Invesco Dynamic Semiconductors ETF" },
    { symbol: "XLK", name: "Technology Select Sector SPDR Fund" },
    { symbol: "IEO", name: "iShares U.S. Oil & Gas Exploration & Production ETF" }

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
    <div>
     <Box pt={2}>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 140  }}>
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
  
      <FormControl variant="standard" sx={{ m: 2, minWidth: 230  }}>
        <InputLabel>
        Select Comparison Index
        </InputLabel>
        <Select onChange={(e) => setEtf(e.target.value)}>
          {etfOptions.map(({ symbol, name }) => (
            <MenuItem value={symbol}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 185 }}>
        <InputLabel>
        Compare to Market
        </InputLabel>
        <Select onChange={(e) => setMrkt(e.target.value)}>
          {mrktOptions.map(({ symbol, name }) => (
            <MenuItem value={symbol}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 140 }}>
      <InputLabel>
        Time Interval
        </InputLabel>
        <Select onChange={(e) => setTime(e.target.value)}>
          <MenuItem value="DAILY">Daily</MenuItem>
          <MenuItem value="WEEKLY">Weekly</MenuItem>
          <MenuItem value="MONTHLY">Monthly</MenuItem>
        </Select>
      </FormControl>
      <DataContainer tick={tick} etf={etf} mrkt={mrkt} time={time} currentUser={currentUser}/>
      </Box>
    </div>
  );
};

export default Home;

// const [tick, setTick] = useState(stockOptions[0].ticker)
