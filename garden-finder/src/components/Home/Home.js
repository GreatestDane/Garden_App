import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    state = {
        title: " T H E   G A R D E N S "
    }

    render() {
        return (
            <div className="landing-box container-fluid">
                <div id="landing-div" className="jumbotron bg-transparent rounded-0">
                    <h1 id="landing-title"> {this.state.title} </h1>
                    <div className="text-center">
                        <button className="top-button btn-lg m-1 btn btn-success">Login</button>
                        <button className="top-button btn-lg m-1 btn btn-success">Register</button>
                        <Link to='/map'> <button className="top-button btn-lg m-1 btn btn-success">Map</button> </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;


