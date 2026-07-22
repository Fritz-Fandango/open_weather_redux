import React, { Component } from 'react';
import '../styles/CurrentKPIs.scss';

function formatTime (timestamp) {
    const event = new Date(timestamp);

    return event.toLocaleTimeString('en-US');
}

class CurrentKPIs extends Component {
    render() {
        return (
            <section className="kpiHeader">
                <h2>Today's weather</h2>
                <hr />
                <div className="cardDeck">
                    <button className="dataCard">
                        <h3>{formatTime(this.props.current.dt)}</h3>
                        <h4>Time Stamp</h4>
                        <p>Nullam volutpat et eros ut tristique.</p>
                    </button>
                    <button className="dataCard">
                        <h3>{this.props.current.temp} &deg;F</h3>
                        <h4>Current Temperature</h4>
                        <p>Nullam volutpat et eros ut tristique.</p>
                    </button>
                    <button className="dataCard">
                        <h3>{this.props.current.feels_like} &deg;F</h3>
                        <h4>Feels Like</h4>
                        <p>Nullam volutpat et eros ut tristique.</p>
                    </button>
                    <button className="dataCard">
                        <h3>{this.props.current.pressure} hPa</h3>
                        <h4>Atmospheric Pressure</h4>
                        <p>Nullam volutpat et eros ut tristique.</p>
                    </button>
                    <button className="dataCard">
                        <h3>{this.props.current.wind_speed} mi/hr</h3>
                        <h4>Current wind speed</h4>
                        <p>Nullam volutpat et eros ut tristique.</p>
                    </button>
                </div>
            </section>
        )
    }
};

export default CurrentKPIs;
