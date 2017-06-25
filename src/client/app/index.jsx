import React from 'react';
import {render} from 'react-dom';
import styles from './customCss.css';
import Tab from './Tab.jsx';

import ToggleDisplay from 'react-toggle-display';


 const materialsArray = [
      {name: "A", titleMaterials: "blah"}, 
      {name: "B", titleMaterials: "blah"}, 
      {name: "C", titleMaterials: "blah"}
      ];
 
 const divStyle = {
          color: 'blue',
            
            };
class App extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {isVisible: false, show: false}
    

    this.handleClick = this.handleClick.bind(this);
    this.createList = this.createList.bind(this);
  }
  
    componentWillMount(){
      let materialsArray;
  // materialsArray = [{titleInput: "", titleMaterials : ""}]
      this.setState({materialsArray})
  }
  
  
  handleClick(numInput) {
    // var x = document.getElementById(numInput).id;
    //   var x = document.getElementById(numInput).style
    // this.setState({	isVisible: !this.state.isVisible, x: divStyle })   
    // console.log(this.state.isVisible)

      this.setState({show: !this.state.show})  

  }
  createList(){
    return materialsArray.map(item => 
      {
        
        const toggleVisibility = this.state.isVisible ? 'nonActiveTab' : 'activeTab';

       
        return <div>
        <button onClick = {() => this.handleClick(item.name)}>Press to display: {item.name}</button>
         
         <ToggleDisplay show={this.state.show}>
         <div id = {item.name} key = {item.name}><Tab tabTitle = {item.name} tabContent = {item.titleMaterials}/></div>
         </ToggleDisplay>
         
         
          </div>
        
      }
    )
  
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
  
render(<App materialsArray = {materialsArray}/>, document.getElementById('app'));
