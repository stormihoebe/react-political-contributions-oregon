import React from 'react';
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function renderContributors(list, type){
  try{
  return list.map(contributor =>
    <li className={type.toLowerCase()} key={contributor.contributor_payee}>
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
  } catch(e){
    console.log(e);
  }
}
class ContributorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors:[]
    };
 }
 componentWillReceiveProps(nextProps) {
   this.setState({ contributors: nextProps.list });
 }

  render(){
    const {type} = this.props;
    return(
      <div className="{this.props.type}Container">
        <h2>{type}</h2>
        <ol>
          {renderContributors(this.props.list, this.props.type)}
        </ol>
      </div>
    )
  }

}

export default ContributorList;
