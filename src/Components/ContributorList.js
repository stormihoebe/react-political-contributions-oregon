import React from 'react';

class ContributorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors:[]
    };
  }
  componentWillMount(){
    fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/')
      .then((response)=> response.json())
      .then((data)=> this.setState({contributors: data}));
  }

  renderContributors(){
    return this.state.contributors.map(contributor => <li key={contributor.sum}>{contributor.contributor_payee}: ${contributor.sum}</li>)
  }

  render(){
    return(
      <div>
      <ol>
      {this.renderContributors()}
      </ol>
      </div>
    )
  }

}

export default ContributorList;
