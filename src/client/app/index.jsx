import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';
import Tab from './Tab.jsx';


 const materialsArray = [
      {name: "A", titleMaterials: "blah"}, 
      {name: "B", titleMaterials: "blah"}, 
      {name: "C", titleMaterials: "blah"}
      ];


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
    componentWillMount(){
      let materialsArray;
  // materialsArray = [{titleInput: "", titleMaterials : ""}]
      this.setState({materialsArray})
  }
  

  
  
  handleClick(numInput){

    return function(){
      console.log(numInput);
      
      
    }


  }
  
  render()
  {
   
    var cycleThroughTheList = materialsArray.map((item) =>
              <div>
                
                <button className = "buttonclass" onClick = { this.handleClick(item.name) }> Change </button>
                <div className = "nonActiveTab">
                  <li key = {item.name}><Tab tabTitle = {item.name} tabContent = {item.titleMaterials}/></li>
                </div>
              </div>
              
              )
  
    return(<div>"app"
              <ul>{cycleThroughTheList}</ul>
            </div>)
  }
}
  
render(<App materialsArray = {materialsArray}/>, document.getElementById('app'));
