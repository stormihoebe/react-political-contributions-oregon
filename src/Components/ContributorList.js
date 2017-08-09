import React from 'react';
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
class ContributorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      number: this.props.number,
      contributors:[]
    };
  }
  componentWillMount(type){
    fetch('http://54.213.83.132/hackoregon/http/oregon_'+this.state.type+'_contributors/'+this.state.number+'/')
      .then((response)=> response.json())
      .then((data)=> this.setState({contributors: data}));
  }

  renderContributors(){
    return this.state.contributors.map(contributor =>
      <li className={this.props.type} key={contributor.sum}>
        <div className="card  blue darken-4">
            <div className="card-content white-text">
              <span className="card-title"><h4>{contributor.contributor_payee}</h4></span>
              <p>In the previous election {contributor.contributor_payee} contributed</p>
              <h5>
                $ {numberWithCommas(parseInt(contributor.sum))}.00
              </h5>
            </div>

          </div>
      </li>)
  }

  render(){
    const {type} = this.props;
    return(
      <div className="{this.props.type}Container">
      <ol>
      {this.renderContributors()}
      </ol>
      </div>
    )
  }

}

export default ContributorList;
