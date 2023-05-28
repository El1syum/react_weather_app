import React from 'react';
import classes from "../../styles/modules/Weather.module.css";

const WeatherSearch = ({setValue, setPlace, value}) => {

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        setPlace(value)
    }

    const onKeyPress = (e) => {
        if (e.keyCode === 13) {
            onClick()
        }
    }

    return (
        <div className={classes.weather__fields}>
            <input
                className={classes.weather__input}
                type="text"
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={'Input a place'}
                onKeyDown={e => onKeyPress(e)}
            />
            <button
                className={classes.weather__btn}
                onClick={() => onClick()}
                type={"submit"}
            >Search</button>
        </div>
    );
};

export default WeatherSearch;