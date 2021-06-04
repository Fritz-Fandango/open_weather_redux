import React, { Component } from 'react';
import '../styles/Card.scss';


function formatDate (timestamp) {
    const event = new Date(timestamp);

    return event.toLocaleDateString('en-US');
}

function formatTime (timestamp) {
    const event = new Date(timestamp);

    return event.toLocaleTimeString('en-US');
}

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img
                    src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
                    alt='Avatar'
                    style={{width: '100%' }}
                />
                <div className='container'>
                    <p>Date: {formatDate(this.props.dateTime)}</p>
                    <p>Min temp: {this.props.minTemp}&deg;F</p>
                    <p>Max temp: {this.props.maxTemp}&deg;F</p>
                    <p>Humidty: {this.props.humidity}%</p>
                    <p>Sunrise: {formatTime(this.props.sunrise)}</p>
                    <p>Sunset: {formatTime(this.props.sunset)}</p>
                </div>
            </div>
        )
    }
}

export default Card;
