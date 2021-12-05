import React, {useState, useEffect} from "react";
import ProfileData from "./ProfileData";
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
      <ProfileData />
    </>
  );
};

export default Profile;
