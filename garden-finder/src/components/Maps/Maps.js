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
            </div>
        )
    }
}

export default Maps;