import React, { Component } from 'react';
import './Maps.css';

class Maps extends Component {
    state = {
        title: " YOU LIKE MAPS? WE GOT MAPS!"
    }

    render() {
        return (
            <div>
                {this.state.title}
                <div className="map">

                </div>
                <form>
                    <label>
                        Zipcode:
                    <input type="text" name="Zipcode" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button className="top-button btn-lg m-1 btn btn-success">Search</button>
            </div>

        )
    }
}

export default Maps;