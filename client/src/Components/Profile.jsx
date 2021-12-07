import React, {useState, useEffect} from "react";
import ProfileData from "./ProfileData";
const Profile = ({ currentUser }) => {
  const [userData, setUserData] = useState([])
  useEffect(() =>{
    fetch('/profile')
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [])


  if (!currentUser) return <div>Please log in to view your profile</div>


  return (
    <>
     <br />
      <h3>Hello {currentUser.username}</h3>
      <h4>You have your eye on {userData.length} stocks</h4>
      {userData.map(d => <p>{d.symbol} <strong>Date:</strong> {d.date} <strong>High:</strong> {d.high} <strong>Low:</strong> {d.low} <strong>Close: {d.close}</strong></p>)}
      <h3>Here is what the news is saying about your stocks</h3>
      {userData.map(d => <ProfileData userData={d.symbol} />)}
    </>
  );
};

export default Profile;
