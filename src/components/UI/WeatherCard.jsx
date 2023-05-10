import React from 'react';
import classes from "../../styles/modules/Weather.module.css";

const WeatherCard = ({weather}) => {
    return (
        <div className={classes.weather__details}>
            <div className={classes.weather__details__left}>
                <div>{weather?.location?.country}, {weather?.location?.name}</div>
                <div>{weather?.current?.last_updated}</div>
                <div>Temp - {weather?.current?.temp_c} °C</div>
                <div>Feels like - {weather?.current?.feelslike_c} °C</div>
                <div>Condition - {weather?.current?.condition?.text}</div>
                <div>Wind - {weather?.current?.wind_kph} kph</div>
            </div>
            <div className={classes.weather__details__right}>
                <img src={weather?.current?.condition?.icon} className={classes.weather__icon}></img>
            </div>
        </div>
    );
};

export default WeatherCard;