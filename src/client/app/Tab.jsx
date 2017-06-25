import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';
import ToggleDisplay from 'react-toggle-display';


class Tab extends React.Component{
    constructor(props)
    {
        super(props);
        this.setState({
           tabTitle: "Default Value", 
           tabContent: "Default Value",
          
        });
        this.state = { show: false};
    }
    
  handleClick() {
      console.log("hello")
    this.setState({
      show: !this.state.show
    });
  }

    
    render(){
        return(<div>
                 <button className = "MenuItem" onClick={ () => this.handleClick() }>Toggle things</button>
                
                 
                 <ToggleDisplay show={this.state.show} >
                    <div className = "contentContainer">
                        <h5>{this.props.tabTitle}</h5>
                        <p>{this.props.tabContent}</p>
                    </div>
                </ToggleDisplay>
            </div>)
    }
}
export default Tab;