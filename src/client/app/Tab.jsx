import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';



class Tab extends React.Component{
    constructor(props)
    {
        super(props)
        this.setState({
           tabTitle: "Default Value", 
           tabContent: "Default Value"
           
        })
        
        
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        
    }
    
    render(){
        return(<div>
                <h5>{this.props.tabTitle}</h5>
                <p>{this.props.tabContent}</p>
            
        </div>)
    }
}
export default Tab;