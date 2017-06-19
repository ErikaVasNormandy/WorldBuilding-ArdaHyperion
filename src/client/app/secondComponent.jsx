import React from 'react';
import {render} from 'react-dom';

class SweetRoll extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {itemCount : 1};
        this.state = {items: "Lavendar Dumpling"};
        this.Add = this.Add.bind(this);
        this.Buy = this.Buy.bind(this);

    }
    
    Add(){
        let newInventoryCount = this.state.itemCount + 1;
        this.setState({itemCount: newInventoryCount});
    }
    
    Buy() {
        let newItemArray = this.state.items + "horker stew";
       // this.setState(this.state.items.push("Horker Stew"));
       this.setState({items: newItemArray})
    }
    
    
    render () {
         
         return( <p>SweetRoll Component <span><div>Items = { this.state.itemCount } and {this.state.items}
         
         <span><button onClick = { this.Add }></button></span>
         </div></span></p>);
    }
}
export default SweetRoll
