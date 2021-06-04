import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherFetchData } from '../actions/index.js';

// Components
import CurrentKPIs from './CurrentKPIs';
import Card from './Card';

// Styles
import '../styles/Dashboard.scss';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the weather</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className='dashboard'>
                <h1>Weather App</h1>
                {this.props.weather.current &&
                    <CurrentKPIs current={this.props.weather.current} />
                }
                <div className='title'>
                    <h2>Forecasted weather</h2>
                    <hr />
                </div>
                {this.props.weather?.daily?.map(today =>
                    <Card
                        key={today.dt}
                        dateTime={today.dt}
                        humidity={today.humidity}
                        icon={today.weather[0].icon}
                        minTemp={today.temp.min}
                        maxTemp={today.temp.max}
                        sunrise={today.sunrise}
                        sunset={today.sunset}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        hasErrored: state.weatherHasErrored,
        isLoading: state.weatherIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(weatherFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
