import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import $ from 'jquery';
// import axios from 'axios';
import GetWeatherForm from './GetWeatherForm.jsx';
import MushroomList from './MushroomList.jsx';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 425px 400px;
  column-gap: 110px;
  margin-top: 25px;
  margin-left: 60px;
  color: #31708E;
  text-transform: uppercase;
`;
const StyledTitle = styled.h3`
  font-style: oblique;
  font-weight: bold;
  text-decoration-line: underline overline;
`;

const Photo_div = styled.img`

object-fit: contain;

`;

const data = {
  mushrooms: [{
    id: 1,
    name: 'Agaricus Campestris',
    nickName: 'Meadow Mushroom',
    genus: 'Agaricus',
    upperTemp: 27,
    lowerTemp: 10,
    humidity: 35,
    habitat: 'In grazed pastures and sometimes on lawns.',
    image:'https://healing-mushrooms.net/wp-content/uploads/2020/02/Agaricus-campestris.jpg'
  },
  {
    id: 2,
    name: 'Lactarius rubidus',
    nickName:'Candy Cap',
    genus: 'Lactarius',
    upperTemp:21,
    lowerTemp:10,
    humidty:45,
    habitat: 'In mossy patches of earth and debris near oaks',
    image:'https://www.mykoweb.com/CAF/photos/large/Lactarius_rubidus%28fs-02%29.jpg'
  },
  {
    id: 3,
    name: 'Boletus Edulus',
    nickName:'King bolete',
    genus: 'Boletaceae',
    upperTemp:18,
    lowerTemp:7,
    humidty:45,
    habitat: 'Terrestrial, woods, and edges',
    image:'https://www.first-nature.com/fungi/images/boletaceae/boletus-edulis7.jpg'
  },
  {
    id: 4,
    name: 'Psilocybe Cyanescens',
    nickName:'Wavy Cap',
    genus: 'Psilocybe',
    upperTemp:15,
    lowerTemp:7,
    humidty:45,
    habitat: 'Irrigated woodchips',
    image: 'https://easytrippy.net/wp-content/uploads/2020/11/Psilocybe-cyanescens.jpg'
  },
  {
    id: 5,
    name: 'Ganoderma Lucidum',
    nickName:'Reishi',
    genus: 'Ganoderma',
    upperTemp:27,
    lowerTemp:12,
    humidty:35,
    habitat: 'On Wood',
    image: 'https://www.first-nature.com/fungi/images/ganodermataceae/ganoderma-lucidum1.jpg'
  }]
}


const App = () => {
  const [mushroomList, setList] = useState(data.mushrooms);
  const [weather, setWeather] = useState('');
  const [filtered, setFilter] = useState(false);

  const filterMushrooms = (weatherParam) => {
    let k = weatherParam.temp;
    let C = k - 273.15;
    console.log('this is the weather', weatherParam.temp)
    const humidity = weatherParam.humidity;
    const filteredMushrooms = mushroomList.filter((mushroom) => {
      return (mushroom.lowerTemp < C && mushroom.upperTemp > C)
      })
    setList(filteredMushrooms);
    console.log('filtered', filteredMushrooms);
    setFilter(true);
  }

  useEffect(() => {
    console.log('i dunno how to make this work', mushroomList)
    // filterMushrooms()
  }, [])

  return (
    <div>
      <StyledTitle>
        Mushroom Weather
      </StyledTitle>
      <GetWeatherForm weatherUp={filterMushrooms}/>
      <ListContainer>
        <MushroomList mushrooms={mushroomList} filtered={filtered}/>

      </ListContainer>
    </div>
  )

}
export default App;