import React, { Component } from 'react';
import ContributorList from './Components/ContributorList';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Top Contributors to Political Campaigns in Oregon</h1>
        <ContributorList/>
      </div>
    );
  }
}

export default App;
