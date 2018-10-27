import React, { Component } from 'react';
import Suggestion from './SuggestTemplate';

class Suggested extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('/api/users/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          users: data
        });
      });
  }

  render() {
    const load = this.state.users ? (
      <div>
        <h1>SUGGESTIONS</h1>
        <Suggestion allUsers={this.state.users} userFriends={this.props.friends} currentId={this.props.id} />
      </div>
    ) : (
      <p>Loading...</p>
    )
    return(
      <div className="users">{ load }</div>
    );
  }
}

export default Suggested;
