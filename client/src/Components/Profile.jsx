import React, {useState, useEffect} from "react";
import ProfileData from "./ProfileData";
import { ImPointDown } from "react-icons/im";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GiTrashCan } from "react-icons/gi";


const Profile = ({ currentUser }) => {
  const [userData, setUserData] = useState([])
  useEffect(() =>{
    fetch('/api/profile')
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [])


  if (!currentUser) return <div>Please log in to view your profile</div>

  function handleDelete(id) {
    window.location.reload()
    fetch(`/api/watchlist_items/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }


  return (
    <div className="profile">
     <br />
      <h3>Hello {currentUser.username}</h3>
      <br/>
      <h4>You have your eye on {userData.length} stocks</h4>
      <br />
      <TableContainer component={Paper} sx={{ maxWidth: 1110, margin: 'auto' }}>
      <Table sx={{ maxWidth: 1110 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Ticker</strong></TableCell>
            <TableCell align="right"><strong>Date</strong></TableCell>
            <TableCell align="right"><strong>High</strong></TableCell>
            <TableCell align="right"><strong>Low</strong></TableCell>
            <TableCell align="right"><strong>Close</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow
              key={row.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.symbol}&nbsp;&nbsp;<button onClick={() => handleDelete(row.id)} style={{width: '18px', height: '20px'}}><GiTrashCan /></button>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.high}</TableCell>
              <TableCell align="right">{row.low}</TableCell>
              <TableCell align="right">{row.close}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br />
      <br />
      <h2 id="newsinfo">Current financial news&nbsp;<ImPointDown /></h2>
      <br />
      <ProfileData /> 
      {/* {userData.map(d => <ProfileData ticker={d.symbol} />)} */}
    </div>
  );
};

export default Profile;
