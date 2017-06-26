import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';
import Tab from './Tab.jsx';

import ToggleDisplay from 'react-toggle-display';
 
 const activeTabStyle = {
   color: 'powderblue', 
   backgroundColor: 'white'
 };
  const dormantTabStyle = {
   color: 'pink',
   backgroundColor: 'black'
 };
 
class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {isVisible: false, show: false, currentTab: 0, tab0Active: true, tab1Active: false, tab2Active: false}
    

 
    this.setTab = this.setTab.bind(this)
  }
  
 
  setTab(newTab){
    this.state.currentTab = newTab;
    if(this.state.currentTab == 0)
    {
      console.log(this.state.tab0Active) 
      this.setState({
        tab0Active: true,
        tab1Active: false,
        tab2Active: false
        
      })
      
    }
     if(this.state.currentTab == 1)
    {
      console.log("is 1")
            this.setState({
              tab0Active: false,
              tab1Active: true,
              tab2Active: false
              
            })
    }
     if(this.state.currentTab == 2)
    {
      console.log("is 2") 
            this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: true
              
            })
    }
  
  }
  
  
  
  render()
  {
    return(<div> 
              <ul className = "MainMenu">
              
                <li className = "MenuItem">
                   <button className = "MenuItem" onClick = {() => this.setTab(0)}>Comprehensive</button>
                </li>
                <li className = "MenuItem">
                    <button className = "MenuItem" onClick = {() => this.setTab(1)} >Groceries</button>
                </li>
                
                <li className = "MenuItem">
                    <button className = "MenuItem" onClick = {() => this.setTab(2)}>Utilities</button>
                </li>
                
                
              </ul>
              
        
            <div class = "contentContainer">
                <h3>Content Container</h3>
                <div id = "0" className = {this.state.tab0Active ? '' : 'dormantTab'}>Comprehensive 
                  
                </div>
                <div id = "1" className = {this.state.tab1Active ? '' : 'dormantTab'}>Groceries</div>
                <div id = "2" className = {this.state.tab2Active ? '' : 'dormantTab'}>Utilities</div>
                
                
            </div>
            </div>
          )
  }
}

render(<App/>, document.getElementById('app'));
