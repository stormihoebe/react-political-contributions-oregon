import React, { Component } from 'react';
import ContributorList from './Components/ContributorList';

function simpleForm(){

  return (
    <div className="input-field">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Top 5 Individuals and Business" id="amount" type="number" className="validate" value={this.state.value} onChange={this.handleChange} />
          <label for="amount">How many would you like to see?</label>
          <input type="submit" value="Submit" />
        </form>
     </div>)
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number:20}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  //state is changing or set with every key stroke entry into the input field
  //you can have a conditional statement to prevent it from setting state until certain conditions are met.
    handleChange(event) {
      this.setState({number: event.target.value});
    }
  //alert the user on what the new state is set to
    handleSubmit(event) {
      console.log("submitted");
      console.log(this.state.number)

      event.preventDefault();
    }

  render() {
    return (
      <div>
        <div className="headline">
          <h1>Top Contributors to Political Campaigns in Oregon</h1>

        </div>
        <div className="row">
          <div className="col m6">
            <h2>Individuals</h2>
            <ContributorList type="individual" number={this.state.number}/>
          </div>
          <div className="col m6">
            <h2>Businesses</h2>

            <ContributorList type="business" number={this.state.number}/>
          </div>
        </div>
        <div className="headline">
          <h1> </h1>
        </div>
      </div>
    );
  }
}

export default App;
