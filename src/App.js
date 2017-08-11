import React, { Component } from 'react';
import ContributorList from './Components/ContributorList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:5,
      business: {},
      Individual: {},
      value: 6
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.hitServer = this.hitServer.bind(this);
    }

    hitServer(){
      fetch('http://54.213.83.132/hackoregon/http/oregon_business_contributors/'+this.state.number+'/')
        .then((response)=> response.json())
        .then((data)=> this.setState({business: data}));
      fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/'+this.state.number+'/')
        .then((response)=> response.json())
        .then((data)=> this.setState({individual: data}));
    }

    componentWillMount(){
      console.log("will Mount");
      this.hitServer();
    }

  //state is changing or set with every key stroke entry into the input field
  //you can have a conditional statement to prevent it from setting state until certain conditions are met.
    onEnter(e){
      e.preventDefault();
    }

    handleChange(e) {
      console.log("changing");
      if ((e.target.value !== this.state.value)&&(e.target.value !== "")) {
        this.setState({ number: e.target.value });
      }
    }
    handleSubmit(event) {
          event.preventDefault();
          this.hitServer();
        }

  render() {
    return (
      <div>
        <div className="headline">
          <h1>Top Contributors to Political Campaigns in Oregon</h1>
          <div className="input-field">
              <form onSubmit={this.handleSubmit}>
                <input placeholder="Top 5 Individuals and Business" id="amount" type="number" className="validate" defaultValue={this.state.number} onChange={this.handleChange} />
                <label for="amount">How many would you like to see?</label>
                <a className="blue darken-4 btn" onClick={this.handleSubmit}>Submit</a>
              </form>
           </div>
        </div>
        <div className="row">
          <div className="col m6">
            <ContributorList type="Individual" list={this.state.individual}/>
          </div>
          <div className="col m6">
            <ContributorList type="Business" list={this.state.business}/>
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
