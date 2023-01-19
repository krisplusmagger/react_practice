import React from 'react';
import ReactDOM from 'react-dom/client';
import './Hello.css';

// class Hello extends React.Component {
    
//     render() {
  
//         return (
//         <div className='f1 tc'>
//             <h1>Hello World</h1>
//             <p>{this.props.greeting}</p>
//         </div>
//         )
//     }   
// } 
const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
    );    
}

export default Hello;