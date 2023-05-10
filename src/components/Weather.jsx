import React, {useEffect, useState} from 'react';
import classes from '../styles/modules/Weather.module.css'
import axios from 'axios';
import WeatherCard from "./UI/WeatherCard";

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
    }, [place])

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
                <button className={classes.weather__btn} onClick={() => setPlace(value)}>Search</button>
            </div>
            <WeatherCard weather={weather} />
        </div>
    );
};

export default Weather;