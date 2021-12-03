import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import axios from 'axios';
import GetWeatherForm from './GetWeatherForm.jsx';
import MushroomList from './MushroomList.jsx';

const data = {
  mushrooms: [{
    id: 1,
    name: 'Agaricus Campestris',
  },
  {
    id: 2,
    name: 'Boletus Edulus',
  },
  {
    id: 3,
    name: 'Candy Cap',
  },
  {
    id: 4,
    name: 'Psilocybe Cyanescens',
  }]
}


const App = () => {
  const [mushroomList, setList] = useState(data.mushrooms);

  return (
    <div>
      <GetWeatherForm />
      <MushroomList />
    </div>
  )
}
export default App;