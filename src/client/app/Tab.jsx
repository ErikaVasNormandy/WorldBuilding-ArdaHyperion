import React from 'react';
import styles from './customCss.css';

class IndividualTab extends React.Component{

  constructor(props) {
  	super(props);
    
    this.state = { isVisible: false, tabTitle: "Default Tab Title"};
    this.handleClick = this.handleClick.bind(this);
  }  
  
  handleClick() {
  	this.setState({
    	isVisible: !this.state.isVisible      
    })
  }
  
  
  render() {
  	const toggleVisibility = this.state.isVisible ? 'hidden' : '';

    return <div>
    	<div>
      	<label>{this.props.tabTitle}</label>
        <input type="button" className="notVisible" isVisible={ this.state.isVisible } onClick={ this.handleClick } />
      </div>      
      
      
      
      <div className={ toggleVisibility }>show hide div with check 1</div>
    </div>;
  }
}


export default IndividualTab;