import React from 'react';



class tabContent extends React.Component{
   
    render(){
        return( <div>HoneysideHoneysideHoneysideHoneysideHoneysideHoneysideHoneysideHoneysideHoneysideHoneysideHoneyside</div>)
    }
};



class IndividualTab extends React.Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
         this.state = {
             contentVisible: false
         }
     
    }
  
     onClick() {
        this.setState({contentVisible: !this.state.contentVisible});
        console.log(this.state.contentVisible);
    }
   
    render(){
        return(<div>
                <div onClick={() => this.onClick()}>
            
                {this.props.tabTitle}
                </div>
                {
                    this.state.contentVisible 
                    ? <tabContent /> 
                    : null
                }
                </div>
            )
    }
    
    
    

};
export default IndividualTab;