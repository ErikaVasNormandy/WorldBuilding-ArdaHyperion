import React from 'react';
import {render} from 'react-dom';
import SweetRoll from './secondComponent.jsx';
import TabList from './TabsList.jsx';
import IndividualTab from './Tab.jsx';

class App extends React.Component {
  
  render () {
    return(
         <div><IndividualTab/></div>
    );
  }
}

render(<App/>, document.getElementById('app'));