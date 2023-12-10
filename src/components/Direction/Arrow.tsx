import React from "react";
import styled, { keyframes } from "styled-components";

const Anim = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(15px, 15px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(-45deg) translate(-15px, -15px);
  }
`;

const Group = styled.div`
  transform: rotate(90deg);

  & > div {
    display: block;
    width: 10px;
    height: 10px;
    border-left: 5px solid white;
    border-top: 5px solid white;
    margin: -10px;
    animation: ${Anim} 2s infinite;
  }

  & > div:nth-child(2) {
    animation-delay: -0.2s;
  }

  & > div:nth-child(3) {
    animation-delay: -0.4s;
  }
`;

const Arrow = () => {
  return (
    <Group>
      <div />
      <div />
      <div />
    </Group>
  );
};

export default Arrow;
