import React, { Component } from 'react';
import './Maps.css';
import Header from '../Header/Header.js';
import { BASE_URL, VERSION, EXT, API_KEY } from '../../config.js';

class Maps extends Component {
    state = {
        title: " YOU LIKE MAPS? WE GOT MAPS!",
        data: null,
    };

    componentDidMount() {
        fetch(`https://${BASE_URL}/search/${VERSION}/search/91942.${EXT}?key=${API_KEY}`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
           this.setState({ data });
      }
          )};

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