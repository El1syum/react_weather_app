import React, {useEffect, useState} from 'react';
import classes from '../styles/modules/Weather.module.css'
import axios from 'axios';
import WeatherCard from "./UI/WeatherCard";
import WeatherSearch from "./UI/WeatherSearch";

const Weather = () => {
    const [value, setValue] = useState('')
    const [place, setPlace] = useState('moscow')
    const [weather, setWeather] = useState({})

    const getWeather = async (place) => {
        if (place !== '') {
            try {
                const response = await axios.get(
                    `http://api.weatherapi.com/v1/current.json?key=7bc127314e8b4fccb7a175601230905&q=${place}`
                )
                console.log(response)
                setWeather(response.data)
                localStorage.setItem('place', place)
            } catch (e) {
                console.log(e)
            } finally {
                setValue('')
            }
        }
    }

    useEffect(() => {
        const localPlace = localStorage.getItem('place')
        if (localPlace) {
            setPlace(localPlace)
        }
    }, [])

    useEffect(() => {
        getWeather(place)
    }, [place])


    return (
        <div className={classes.weather}>
            <WeatherSearch setValue={setValue} value={value} setPlace={setPlace} />
            <WeatherCard weather={weather}/>
        </div>
    );
};

export default Weather;