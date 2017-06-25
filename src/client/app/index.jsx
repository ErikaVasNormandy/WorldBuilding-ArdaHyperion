import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';
import Tab from './Tab.jsx';

import ToggleDisplay from 'react-toggle-display';
 
class App extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {isVisible: false, show: false}

    this.handleClick = this.handleClick.bind(this);
    
  }
  
    componentWillMount(){
   
  }
  
  
  handleClick(numInput) {
   
      this.setState({show: !this.state.show})  

  }
  
  render()
  {
    return(<div>
            <ul class = "MainMenu">
              <li class = "MenuItem"><Tab tabTitle="Comprehensive" tabContent = "some content" /></li>
              <li class = "MenuItem"><Tab tabTitle="Comprehensive" tabContent = "some content" /></li>
              <li class = "MenuItem"><Tab tabTitle="Comprehensive" tabContent = "some content" /></li>
            </ul>
              
            </div>)
  }
}
  
render(<App/>, document.getElementById('app'));
