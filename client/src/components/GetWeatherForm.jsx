import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "babel-polyfill";
import 'regenerator-runtime/runtime';
// import './style/Weather.css';


const GetWeatherForm = () => {
  const [weather, setWeather] = useState('');
  const [zipCode, setZip] = useState(94530)
  const [weatherObj, setObj] = useState({});
  const [city, setCity] = useState('')
  // useEffect(() => {
  //   // getWeather(94530)
  // })
  const apiKey = '';

  const getWeather = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
        descp: res.data.weather[0].description,
        temp: res.data.main.temp,
        city: res.data.name,
        humidity: res.data.main.humidity,
        press: res.data.main.pressure,
    })
    setCity(res.data.name)
    // console.log('getting weather with axios');
    // axios({
    //   method: 'get',
    //   url: `/weather`,
    //   params: {
    //     zip: param
    //   }
    // })
    //   .then((data) => {
    //     console.log('success getting data. here is data:', data.data.results)
    //     // setObj({weather: data.data.results})
    //   })
    //   .catch((err) => {
    //     console.log('failed to get weather', err)
    //   })
  }
  let k = weather.temp;
  let C = k - 273.15

  const Weath = () => {
    return(
    <div>
        <div >
            Weather information for {city}
        </div>
        <div >
            <div >
                Weather : {weather.descp}
            </div>
            <div >
                Temperature : {C.toFixed(2)} &#8451;
            </div>
            <div >
                Humidity :{weather.humidity} %
            </div>
            <div >
                Pressure :  {weather.press} mb
            </div>
        </div>
    </div>
    )
  }
  return (
    <>
      <div >Weather Info</div>
        <div >
            <div >
                <form onSubmit={getWeather} >
                    <input type="text"
                    placeholder="zip"
                    name="loc" />
                    <button >Search</button>
                </form>
              {weather && <Weath />}
          </div>
      </div>
  </>
  )
}

export default GetWeatherForm;