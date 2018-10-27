import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {

  const userList = users.map(user => {
    return(
      <Link to={'/user/' + user.id} key={user.id}>
        <div className="card">
          <p className="card-text">
            <span className="property">Name: </span>
            {user.firstName + ' ' + user.surname}
          </p>
          <p className="card-text">
            <span className="property">Age: </span>
            {user.age}
          </p>
          <p className="card-text">
            <span className="property">Gender: </span>
            {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </p>
          <p className="card-text">
            <span className="property">Friends: </span>
            {user.friends.length}
          </p>
        </div>
      </Link>
    );
  });

  return(
    <div className="users">{userList}</div>
  );
}

export default Users;
