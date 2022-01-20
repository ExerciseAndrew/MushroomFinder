import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "babel-polyfill";
import 'regenerator-runtime/runtime';
// import './style/Weather.css';
import styled from 'styled-components';

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`
const CardButton = styled.button`
  display: block;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

const GetWeatherForm = (props) => {
  const [weather, setWeather] = useState({});
  const [zipCode, setZip] = useState(0)
  const [city, setCity] = useState('')
  const apiKey = 'd70a4cf2a3544153f7bb20a501892692';

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
    props.weatherUp(res.data.main);
    console.log('anything here?', res.data.main)
  }

  let k = weather.temp;
  let C = k - 273.15
  // let F = k - 459.67

  const Weath = () => {
    // console.log(weather)
    return(
    <CardWrapper>
        <CardHeader >
        <CardHeading >
            Weather information for {city}
            </CardHeading>
        </CardHeader>
        <CardBody >
            <CardFieldset >
                Weather : {weather.descp}
            </CardFieldset>
            <CardFieldset >
                Temperature : {C.toFixed(2)} &#8451;
            </CardFieldset>
            <CardFieldset >
                Humidity :{weather.humidity} %
            </CardFieldset>
            <CardFieldset >
                Pressure :  {weather.press} mb
            </CardFieldset>
        </CardBody>
    </CardWrapper>
    )
  }
  return (
    <>
        <CardBody >
            <CardFieldset >
                <form onSubmit={getWeather} >
                    <CardInput type="text"
                    placeholder="zip"
                    name="loc" />
                    <CardButton >Search</CardButton>
                </form>
              {weather && <Weath />}
          </CardFieldset>
      </CardBody>
  </>
  )
}

export default GetWeatherForm;