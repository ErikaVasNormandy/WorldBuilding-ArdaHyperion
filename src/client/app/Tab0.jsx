import React from 'react';

class Child extends React.Component {
  render() {
    return (<div>I'm the child</div>);
  }
}

class IndividualTab extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }
  
  render() {
    return(
      <div>
        <div onClick={() => this.onClick()}>
          Parent - click me to show/hide my child
        </div>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  }
  
  onClick() {
    this.setState({childVisible: !this.state.childVisible});
    console.log(this.state.childVisible);

    
  }
};
 
export default IndividualTab;