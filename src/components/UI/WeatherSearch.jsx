import React from 'react';
import classes from "../../styles/modules/Weather.module.css";

const WeatherSearch = ({setValue, setPlace, value}) => {

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
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
    );
};

export default WeatherSearch;