import React, { useState, useEffect } from 'react';
import MushroomListItem from './MushroomListItem.jsx';

const MushroomList = (props) => {
  return (
    <div>
      {props.mushrooms.map((mushroom) =>
      <MushroomListItem name={mushroom.name} />
    )}
    </div>
  )
}

export default MushroomList;