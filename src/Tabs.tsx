import * as React from 'react';

interface tabProps {
    tabTitle: string;
    tabContent: string;
    /* timestamp? */
}

class Tab extends React.Component<tabProps, {}> {
    render() {
        return(<div>
        <h3>{this.props.tabTitle}</h3>
        <p> {this.props.tabContent} </p>
        </div>);
    }
    
}
export default Tab;
