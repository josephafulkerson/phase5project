import React, {useState, useEffect} from "react";
import ProfileData from "./ProfileData";
const Profile = ({ currentUser }) => {
  const [userData, setUserData] = useState([])
  useEffect(() =>{
    fetch('/profile')
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [])

  console.log(userData)

  if (!currentUser) return <div>Please log in to view your profile</div>


  return (
    <>
      <h3>Hello {currentUser.username}</h3>
      <h4>You have your eye on {userData.length} stocks</h4>
      {userData.map(d => <p>{d.symbol}</p>)}
      <ProfileData />
    </>
  );
};

export default Profile;
