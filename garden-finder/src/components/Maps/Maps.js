import React, { Component } from 'react';
import './Maps.css';
import Header from '../Header/Header.js';
import { endpoint } from '../../config.js';

class Maps extends Component {
    state = {
        title: " YOU LIKE MAPS? WE GOT MAPS!"
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error("Error:", error))
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
                <button className="top-button btn-lg m-1 btn btn-success" onClick={this.fetchItems()}>Search</button>
                </div>
            </div>

        )
    }
}

export default Maps;