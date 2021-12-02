import React from "react";

const Profile = ({ currentUser }) => {
  return (
    <>
      <h3>Hello {currentUser.username}</h3>
    </>
  );
};

export default Profile;
