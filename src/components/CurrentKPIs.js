import React, { Component } from 'react';
import '../styles/CurrentKPIs.scss';

function formatTime (timestamp) {
    const event = new Date(timestamp);

    return event.toLocaleTimeString('en-US');
}

class CurrentKPIs extends Component {
    render() {
        return (
            <section className="kpi_header">
                <button className="dataCard">
                    <h3>{formatTime(this.props.current.dt)}</h3>
                    <h4>Current Time</h4>
                    <p>Nullam volutpat et eros ut tristique.</p>
                    <span className="link-text">
                        View Current Time
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                        </svg>
                    </span>
                </button>
                <button className="dataCard">
                    <h3>{this.props.current.temp} &deg;F</h3>
                    <h4>Current Temperature</h4>
                    <p>Nullam volutpat et eros ut tristique.</p>
                    <span className="link-text">
                        View Current Temperature
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                        </svg>
                    </span>
                </button>
                <button className="dataCard">
                    <h3>{this.props.current.feels_like} &deg;F</h3>
                    <h4>Feels Like</h4>
                    <p>Nullam volutpat et eros ut tristique.</p>
                    <span className="link-text">
                        View Feels Like Temp
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                        </svg>
                    </span>
                </button>
                <button className="dataCard">
                    <h3>{this.props.current.pressure} hPa</h3>
                    <h4>Atmospheric Pressure</h4>
                    <p>Nullam volutpat et eros ut tristique.</p>
                    <span className="link-text">
                        View Atm. Pressure
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                        </svg>
                    </span>
                </button>
                <button className="dataCard">
                    <h3>{this.props.current.wind_speed} mi/hr</h3>
                    <h4>Current wind speed</h4>
                    <p>Nullam volutpat et eros ut tristique.</p>
                    <span className="link-text">
                        View Wind Speed
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                        </svg>
                    </span>
                </button>
            </section>
        )
    }
};

export default CurrentKPIs;
