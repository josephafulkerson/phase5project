import React, {useState, useEffect} from "react";

const Profile = ({ currentUser }) => {
  const [userData, setUserData] = useState([])
  useEffect(() =>{
    fetch('/profile')
    .then(r => r.json())
    .then(data => setUserData(data))
  })

  if (!currentUser) return <div>Please log in to view your profile</div>


  return (
    <>
      <h3>Hello {currentUser.username}</h3>
      <h3>My Stocks in the News</h3>
      <p>{userData.high}</p>
    </>
  );
};

export default Profile;
