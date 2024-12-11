import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  // useParams gives us the dynamic part of the URL
  const { userId } = useParams();

  // Data for each user (this could come from an API or database)
  const profiles = {
    1: { name: 'John Doe', email: 'john@example.com' },
    2: { name: 'Jane Smith', email: 'jane@example.com' },
    3: { name: 'Sam Brown', email: 'sam@example.com' },
  };

  const userProfile = profiles[userId]; // Get the user profile based on userId

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Profile;
