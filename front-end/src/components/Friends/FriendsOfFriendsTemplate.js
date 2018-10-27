import React from 'react';

const displayFriends = ({ friends }) => {
  const friendsList = friends.map(friend => {
    return(
      <p key={friend.id}>{friend.firstName + ' ' + friend.surname}</p>
    );
  });

  return(
    <div className="friends-of-friends"> { friendsList } </div>
  );
}

export default displayFriends;
