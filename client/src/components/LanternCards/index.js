import React from "react";

import styled, { css } from 'styled-components';

const StyleCard = styled.div`
  border: 3px solid;
  border-color: ${props => props.color};
  border-radius: 50%;
  
  background: ${props => props.color };
  color: #E2E2E8;

  height: 7vh;
  width: 7vh;

  font-size: 2.5em;
  text-align: center;

  pointer-events: ${props => props.enabled ? 'auto' : 'none'};

  /* Show point/click & hover if number > 0  */
  ${props =>
    props.number && css`
      cursor: pointer;

      &:hover {
        color: ${props => props.color};
        background: transparent;
      }
    `
  }
  

  transform: translateY(${props => props.selected ? '-20%' : '0' });
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

`;

function LanternCards({ number, ...props }) {
  
  return (
    <StyleCard number={number} {...props}>
      {number || ''}
    </StyleCard>
  );
}

export default LanternCards;