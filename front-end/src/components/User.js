import React, { Component } from 'react';
import UserFriends from './Friends/UserFriends';
import Suggested from './Friends/Suggested';

class User extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    let id = this.props.match.params.user_id;
    this.fetchData(id);
  }

  fetchData = (id) => {
    fetch('/api/users/' + id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          user: data
        });
      });
  }

  render() {
    const user = this.state.user ? (
      <div className="user">
        <div className="user-info-container">
          <div className="user">
            <h1>
              <span className="property">Name: </span>
              {this.state.user.firstName + ' ' + this.state.user.surname}
            </h1>
            <p>
              <span className="property">Age: </span>
              {this.state.user.age}
            </p>
            <p>
              <span className="property">Gender: </span>
              {this.state.user.gender}
            </p>
            <p>
              <span className="property">Friends: </span>
              {this.state.user.friends.length}
            </p>
          </div>
          <Suggested friends={this.state.user.friends} id={this.props.match.params.user_id} />
        </div>
        <h1>FRIENDS</h1>
        <UserFriends friends={this.state.user.friends} />
      </div>
    ) : (
      <p>Loading...</p>
    )

    return(
      <div className="single-user">
        { user }
      </div>
    );
  }
}

export default User;
