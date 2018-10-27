import React, { Component } from 'react';
import Friends from './FriendsTemplate';

class UserFriends extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let friendsArray = this.props.friends;

    friendsArray.forEach(friend => {
      fetch('/api/users/' + friend)
        .then(res => {
          return res.json();
        })
        .then(data => {
          let friends = [...this.state.friends, data];
          this.setState({
            friends: friends
          });
        });
    });
  }

  render() {
    const allFriends = this.state.friends ? (
      <Friends friends={this.state.friends} />
    ) : (
      <p>Loading...</p>
    )

    return (
      <div className="users">{ allFriends }</div>
    );
  }
}

export default UserFriends;
