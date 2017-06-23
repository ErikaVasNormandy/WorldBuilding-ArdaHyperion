import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';

  
  var itemDictionary = [
              {name: "Almond Butter", price: 13, location: "Farmer's Market"},
              {name: "Coffee", price: 12, location: "Farmer's Market"}
          ];
     
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {isVisible: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isVisible: !this.state.isVisible
    })
    console.log(this.state.isVisible)
  }
// getInitialState() {
//   return({itemDictionary: []})
// }
  
     
  render() {
    const toggleVisibility = this.state.isVisible ? 'nonActiveTab': '';
    var listItems = this.props.itemDictionary.map(function(item) {
      return(
      
      <li class= "menuItem" key = {item.name} className = {toggleVisibility} >
                <p>{item.name} ........................ {item.price}</p>
              </li>);
    });
      
      
    return(<div>
              Materials:
             <button className = "ComprehensiveTab" onClick = {this.handleClick}>Comprehensive</button> 
                <ul class = "mainmenu, materials">{listItems}</ul>
             <button className = "GroceryTab" onClick = {this.handleClick}>Comprehensive</button> 
                <ul class = "mainmenu, materials">{listItems}</ul>
           
         
          </div> );
  }
}


render(<App itemDictionary = {itemDictionary}/>, document.getElementById('app'));