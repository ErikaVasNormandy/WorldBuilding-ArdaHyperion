import * as React from 'react';

interface tabProps {
    tabTitle: string;
    tabContent: string;
    tabIsVisible: Boolean;
    /* timestamp? */
}
class Tab extends React.Component<tabProps, {}> {
    
    constructor(props: tabProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {tabIsVisible: false}
        
    }
    getInitialState() {
        return{ 
            tabIsVisible: false
        };
    }
    handleClick(evt, domNode) {
        /* Toggle the state of the visibility */
        this.setState({
            tabIsVisible: !this.state.tabIsVisible });
        console.log("status");
     
    }
    
    render() {
        return(<div>
      
            <button onClick = {this.handleClick.bind(this)}>  
            <h3>{this.props.tabTitle}</h3>
            <p> {this.props.tabContent} </p></button>
        
       
        </div>);
    }
    
}
export default Tab;
