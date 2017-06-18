import * as React from "react";
import Tab from "./Tabs";

interface itemVariables {
    objectName: string;
    objectType: string;
    objectValue: number;
    
}

class CustomItem extends React.Component<itemVariables, {}> {
    render() {
        return(
            <div>
            <h3>Item: {this.props.objectName}</h3> 
            <h4>Type: {this.props.objectType}</h4> 
            <h4>Value: {this.props.objectValue}</h4>  
            
            <Tab tabTitle = "arrayList Eventually" tabContent = "pull data"/>
            </div>);
    }
}

export default CustomItem;