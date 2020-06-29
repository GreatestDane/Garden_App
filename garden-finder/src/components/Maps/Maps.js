import React, { Component } from 'react';
import './Maps.css';
import Header from '../Header/Header.js';

class Maps extends Component {
    state = {
        title: " YOU LIKE MAPS? WE GOT MAPS!"
    }

    render() {
        return (
            <div>
                <Header />
                
                <div className="flex-container">
                {this.state.title}
                <div className="map">
                    I will be a map
                </div>
                <form>
                    <label>
                        Zipcode:
                    <input type="text" name="Zipcode" />
                    </label>
                </form>
                <button className="top-button btn-lg m-1 btn btn-success">Search</button>
                </div>
            </div>

        )
    }
}

export default Maps;