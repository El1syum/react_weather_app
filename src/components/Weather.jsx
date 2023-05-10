import React, {useEffect, useState} from 'react';
import classes from '../styles/modules/Weather.module.css'
import axios from 'axios';

const Weather = () => {
    const [value, setValue] = useState('')
    const [place, setPlace] = useState('Moscow')
    const [weather, setWeather] = useState({})

    const getWeather = async (place) => {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=7bc127314e8b4fccb7a175601230905&q=${place}`
        )
        console.log(response.status)
        setWeather(response.data)
    }

    useEffect(() => {
        getWeather(place)
    }, [])

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={classes.weather}>
            <div className={classes.weather__fields}>
                <input
                    className={classes.weather__input}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e)}
                    placeholder={'Input a place'}
                />
                <button className={classes.weather__btn} onClick={() => console.log(value)}>Search</button>
            </div>
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
        </div>
    );
};

export default Weather;