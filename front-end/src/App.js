import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/AllUsers';
import User from './components/User';

class App extends Component {
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
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={() => <Users users={this.state.users} />} />
          <Route path='/user/:user_id' component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
