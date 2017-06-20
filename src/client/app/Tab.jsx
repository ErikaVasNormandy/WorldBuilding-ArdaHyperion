import React from 'react';



class tabContent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( <div>Honeyside</div>)
    }
};



class IndividualTab extends React.Component{
    constructor() {
        super();
         this.setState({contentVisible: false});
         this.onClick = this.onClick.bind(this);
    
    }
  
    
   
    render(){
        return(<div>
                    <div>
                        <button onClick={() => this.onClick()}>Honeystrand Cave </button>
                    </div>
                
                 {this.contentVisible ? <tabContent /> : null}
                </div>
            )
    }
    
    
     onClick(props) {
        this.setState({contentVisible: !this.props.contentVisible});
        console.log(this.props.contentVisible);
    }
 
    
}
export default IndividualTab;