import React from 'react';
import {render} from 'react-dom';
import SweetRoll from './secondComponent.jsx';

class App extends React.Component {
  render () {
    return(<div><p> Hello React!</p>
           <p> <SweetRoll></SweetRoll></p>
           </div>
    );
  }
}

render(<App/>, document.getElementById('app'));