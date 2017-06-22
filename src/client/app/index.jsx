import React from 'react';
import {render} from 'react-dom';
import SweetRoll from './secondComponent.jsx';
import TabList from './TabsList.jsx';
import IndividualTab from './Tab.jsx';

class App extends React.Component {
  
  render () {
            var items=[{name: 'Karthspire'}, {name: "Helgen"}, {name: "Chillfurrow Lighthouse"}]

    return(
         <div><TabList items = {items} /></div>
    );
  }
}

render(<App/>, document.getElementById('app'));