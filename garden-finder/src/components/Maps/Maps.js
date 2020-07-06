import React, { Component } from 'react';
import './Maps.css';
import { BASE_URL, VERSION, EXT, API_KEY } from '../../config.js';

class Maps extends Component {
    state = {
        title: " YOU LIKE MAPS? WE GOT MAPS!",
        mapData: [],
    };


    // renderMapData = () => {
    //     let mapElements = this.state.mapData
    //     mapElements.map( (element, i) => {
    //         return (
    //             <div key={i} className='map-elements'>
    //                 {element}
    //             </div>
    //         )
    //     })
    //         return mapElements;
    // }

    handleClick = () => {
        fetch(`https://${BASE_URL}/search/${VERSION}/search/91942.${EXT}?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ mapData: data });
            }
            )
    };

    mapLog = () => {
        let data = this.state.mapData; 
        console.log(data.results[3]);
    }


    // componentDidMount() {
    //     fetch(`https://${BASE_URL}/search/${VERSION}/search/91942.${EXT}?key=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({ mapData: data });
    //         }
    //         )
    // };




    render() {
        return (
            <div>
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
                    <button className="top-button btn-lg m-1 btn btn-success" onClick={() => this.handleClick()}>Search</button>
                    <button className="top-button btn-lg m-1 btn btn-success" onClick={() => this.mapLog()}>Console Log</button>
                    {/* <button className="top-button btn-lg m-1 btn btn-success" onClick={() => this.renderMapData()}>display</button> */}

                </div>
                <div className='results'>
                    {/* {this.state.mapData} */}
                </div>
            </div>

        )
    }
}

export default Maps;