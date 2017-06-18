import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";
import CustomItem from "./customcomponent";
import Tab from "./Tabs";

// ReactDOM.render(
//     <Hello name = "Alva TideMoon"/>, 
//     document.getElementById("root")
// );

ReactDOM.render( 
    <CustomItem 
    objectName="Creme Treat" 
    objectType="Food" 
    objectValue={5}/>, document.getElementById("root")
);

// ReactDOM.render(
//     <Tab tabTitle = "arrayList Eventually" tabContent = "pull data"/>, document.getElementById("MainContent"))