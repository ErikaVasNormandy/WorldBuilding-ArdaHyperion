import React from 'react';
import styles from './customCss.css';

class IndividualTab extends React.Component{

  constructor(props) {
  	super(props);
    
    this.state = { checked: false, };
    this.handleChange = this.handleChange.bind(this);
  }  
  
  handleChange() {
  	this.setState({
    	checked: !this.state.checked      
    })
  }
  
  
  render() {
  	const togglecheck1 = this.state.checked ? 'hidden-check1' : '';

    return <div>
    	<div>
      	<label>Check 1</label>
        <input type="checkbox" id="chk1" className="chk11" checked={ this.state.checked } onChange={ this.handleChange } />
      </div>      
      
      
      
      <div className={ togglecheck1 }>show hide div with check 1</div>
    </div>;
  }
}


export default IndividualTab;