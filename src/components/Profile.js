import React from 'react';

const Profile = ({ user }) => {
  const { id, pw } = user || {};
  return (
    <>
      <h1>Profile mmmmmmmmmmmm</h1>
      <dt>{id}</dt>
      <dt>{pw}</dt>
    </>
  );
};

export default Profile;
