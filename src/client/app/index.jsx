import React from 'react';
import {render} from 'react-dom';
import SweetRoll from './secondComponent.jsx';
import TabList from './TabsList.jsx';

class App extends React.Component {
  
  render () {
    return(<TabList/>
         
    );
  }
}

render(<App/>, document.getElementById('app'));