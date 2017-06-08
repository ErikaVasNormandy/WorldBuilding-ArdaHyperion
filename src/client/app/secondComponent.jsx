import React from 'react';
import {render} from 'react-dom';

class SweetRoll extends React.Component {
    render () {
         
         return( <p>SweetRoll Component</p>);
    }
}
export default SweetRoll

// class SweetRoll extends React.Component {
//     constructor(props)
//     {
//         super(props);
//         //props == pipes
//         this.state = {likesCount: 0};
//         this.onLike = this.onLike.bind(this)
//     }
    
    
//     onLike() {
//         let newLikesCount = this.state.likesCount + 1;
//         this.setState({likesCount: newLikesCount});
//     }
//     render() {
//         return ( 
//             <div>
//             Likes: <span> {this.state.likesCount}</span>
//             <div><button onClick={this.onLike}>Like Me</button></div>
//             </div>
//             );
//     }
// }

// export default SweetRoll;