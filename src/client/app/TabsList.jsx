import React from 'react';
 
import IndividualTab from './Tab.jsx';
        var items=[{name: 'Karthspire'}, {name: "Helgen"}, {name: "Chillfurrow Lighthouse"}]

class TabList extends React.Component {
    constructor(props){
        super(props);
        
    }
    getInitialState(){
        return {items: []}
    }
    mapItems() {
          
    }
    render(){
        var listItems = this.props.items.map(function(item){
            return(
                <li key = {item.name}> {item.name}</li>)
        });



        return(
            <div>
            <h3>Snowberry Pie</h3>
                  <IndividualTab tabTitle = "Moon Sugar"/>
               <ul> {listItems}
               </ul>
            </div> 
            );
    }
}

export default TabList;