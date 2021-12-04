import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MushroomListItem = (props) => {
  console.log(props)
  return (

    <div>
      {props.name}
    </div>
  )
}

export default MushroomListItem;