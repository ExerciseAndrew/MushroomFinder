import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MushroomListItem_Container = styled.div `
display:flex;
flex-direction: column;
gap: 15px;
margin-top: 10px;
border-radius: 10px;
transition: 0.1s ease;
border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

const Photo_div = styled.img`

object-fit: contain;

`;

const MushroomListItem = (props) => {
  return (
    <MushroomListItem_Container>
      <Photo_div src={props.mushroom.image}/>

    <div>
      {props.mushroom.name}
    </div>
    </MushroomListItem_Container>
  )
}

export default MushroomListItem;