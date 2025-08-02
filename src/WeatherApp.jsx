import "./Weatherapp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"",
        temp:0,
        tempMin:0,
        tempMax:0,
        humidity:0,
        feelsLike:0,
        weather:""
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo );
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}