import React from 'react';
import FriendsOfFriends from './FriendsOfFriends';

const displayFriends = ({ friends }) => {
  const friendsList = friends.map(friend => {
    return(
      <div className="card" key={friend.id}>
        <p className="card-text">
          <span className="property">Name: </span>
          {friend.firstName + ' ' + friend.surname}
        </p>
        <p className="card-text">
          <span className="property">Age: </span>
          {friend.age}
        </p>
        <p className="card-text">
          <span className="property">Gender: </span>
          {friend.gender.charAt(0).toUpperCase() + friend.gender.slice(1)}
        </p>
        <div className="fof-container">
          <h4 className="property">Friends </h4>
          <FriendsOfFriends friends={friend.friends} />
        </div>
      </div>
    );
  });

  return(
    <div className="users">{ friendsList }</div>
  );
}

export default displayFriends;
