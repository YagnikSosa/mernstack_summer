import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL1 = "https://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const API_URL2 = "https://api.openweathermap.org/data/2.5/forecast";
    let limit = 1;
    let lat=0;
    let lon=0;

    let getLatandLon= async ()=>{
            let response = await fetch(`${API_URL1}?q=${city}&limit=${limit}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            lat = jsonResponse[0].lat;
            lon = jsonResponse[0].lon;
            console.log(lat,lon);
    }

    let getWeatherInfo = async ()=>{
        try{
            await getLatandLon();
            let response = await fetch(`${API_URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city:city,
                temp:jsonResponse.list[0].main.temp,
                tempMin:jsonResponse.list[0].main.temp_min,
                tempMax:jsonResponse.list[0].main.temp_max,
                humidity:jsonResponse.list[0].main.humidity,
                feelsLike:jsonResponse.list[0].main.feels_like,
                weather:jsonResponse.list[0].weather[0].description
            }
            console.log(result);
            return result;
        }catch(e){
            throw e;
        }
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            <br />
        </div>
    );
}