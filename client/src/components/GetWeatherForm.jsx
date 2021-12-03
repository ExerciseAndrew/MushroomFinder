import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const GetWeatherForm = () => {
  // const [mushroomList, setList] = useState(props.data.mushrooms);
  useEffect(() => {
    fetch("api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}")
      .then(res => res.json())
      .then(
        (result) => {
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  return (
    <input type="text"/>
  )

}

export default GetWeatherForm;