import React, { useState, useEffect } from 'react';
import MushroomListItem from './MushroomListItem.jsx';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-style: oblique;
  font-weight: bold;
  text-decoration-line: underline overline;
`;
const InnerListContainer = styled.div`
  display: grid;
  grid-template-columns: 425px 400px;
  column-gap: 110px;
  margin-top: 25px;
  margin-left: 60px;
  color: #31708E;
  text-transform: uppercase;
`;
const Photo_div = styled.img`

object-fit: contain;

`;

const MushroomList = (props) => {
console.log(props)
if (props.filtered === true) {
  return (

    <InnerListContainer>
        <StyledTitle>
            The weather in your region is good for these mushrooms:
        </StyledTitle>
        {props.mushrooms.map((mushroom) =>
        <MushroomListItem mushroom={mushroom} />
      )}
    </InnerListContainer>
  )
  } else {
    return (
      <div>
          <StyledTitle>
              Is it mushroom weather in your area?
          </StyledTitle>
          <Photo_div src={'https://www.first-nature.com/fungi/images/boletaceae/boletus-edulis7.jpg'}/>

      </div>
    )
  }
}

export default MushroomList;