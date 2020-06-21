import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {
        title: " T H E   G A R D E N S "
    }

       render() {
           return (
               <div className="landing-box container-fluid">
                   <div id="landing-div" className="jumbotrong bg-transparent rounded-0">
                       <h1 id="landing-title"> { this.state.title } </h1>
                       <div className="text-center">
                       </div>
                   </div>
               </div>
           )
       }
//     render() {
//         return (
//             <div className="landing-box container-fluid">
//                 <div id="landing-div" className="jumbotron bg-transparent rounded-0">
//                     {/* <h1 id="landing-title">T H E    G A R D E N S</h1> */}
//                     <h1 id="landing-title">{this.state.title}</h1>
//                     <div className="text-center">
//                         {/* <a href="/login" className="top-button btn-lg m-1 btn btn-success" onClick={()=> this.handleClick()}>Login</a> */}
//                         <button className="top-button btn-lg m-1 btn btn-success" onClick={() => this.handleClick()}>Login</button>
//                         {/* <button onClick={()=> this.handleClick()}>Console Log </button> */}
//                         <a href="/express_backend" className="top-button btn-lg m-1 btn btn-success">Register</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Home; 