import React, { Component } from 'react';
import Template from './FriendsOfFriendsTemplate';

class FriendsOfFriends extends Component {
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
    const fof = this.state.friends ? (
      <Template friends={this.state.friends} />
    ) : (
      <p>Loading...</p>
    )

    return(
      <div>{ fof }</div>
    );
  }
}

export default FriendsOfFriends;
