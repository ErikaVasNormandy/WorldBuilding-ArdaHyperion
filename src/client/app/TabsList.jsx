import React from 'react';
 
import IndividualTab from './Tab.jsx';

class TabList extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                  <IndividualTab/>
            </div> 
            );
    }
}

export default TabList;