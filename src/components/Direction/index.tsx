import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";

const Container = styled.div`
  width: 320px;
  padding: 8px;
  height: 100%;
  background-color: #607D8B;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 3px var(--shadow-color);

  & > img:first-child {
    height: 100%;
    aspect-ratio: 1;
  }

  @media screen and (max-width: 700px){
    margin: 20px;
    height: 250px;
  }
`;

const Spacecraft = styled.div<{ $ascending?: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > p {
    color: white;
    font-size: 1.2em;
  }

  & > div {
    transform: ${(props) => (props.$ascending ? "unset" : "rotate(180deg)")};

    & > img {
      height: 100px;
      aspect-ratio: 0.5;
    }
  }
`;

const Direction = ({ isAscending }: { isAscending?: boolean }) => {
  return (
    <Container>
      <img src="/assets/img/earth.png" />
      <Spacecraft $ascending={isAscending}>
        <p>N</p>
        <div data-testid="direction">
          <Arrow />
          <img src="/assets/img/spacecraft.png" />
        </div>
        <p>S</p>
      </Spacecraft>
    </Container>
  );
};

export default Direction;
