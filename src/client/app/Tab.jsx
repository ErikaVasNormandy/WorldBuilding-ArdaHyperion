import React from 'react';
import styles from './customCss.css';

class IndividualTab extends React.Component{

  constructor(props) {
  	super(props);
    
    this.state = { checked: false, checked2: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);    
  }  
  
  handleChange() {
  	this.setState({
    	checked: !this.state.checked      
    })
  }
  
  handleChange2() {
  	this.setState({
    	checked2: !this.state.checked2      
    })
  }
  
  render() {
  	const togglecheck1 = this.state.checked ? 'hidden-check1' : '';
    const togglecheck2 = this.state.checked2 ? 'hidden-check2' : '';
    
    return <div>
    	<div>
      	<label>Check 1</label>
        <input type="checkbox" id="chk1" className="chk11" checked={ this.state.checked } onChange={ this.handleChange } />
        <label>Check 2</label>
        <input type="checkbox" id="chk2" className="chk22" checked={ this.state.checked2 } onChange={ this.handleChange2 } />
      </div>      
      <div className={ togglecheck1 }>show hide div with check 1</div>
      <div className={ togglecheck2 }>show hide div with check 2</div>
    </div>;
  }
}


export default IndividualTab;