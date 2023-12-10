import React from "react";
import useTemperature from "src/hooks/useTemperature";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 320px;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: var(--container-color);
  border-radius: 8px;
  box-shadow: 0 0 3px var(--shadow-color);

  & > div:last-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    height: 250px;
  }
`;

const Anim = ({ $cy, $py }: { $cy: string; $py: string }) => keyframes`
  from {
    height: ${$py};
  }

  to {
    height: ${$cy};
  }
`;

const Thermometer = styled.div<{ $cy: string; $py: string }>`
  width: 30px;
  height: 100%;
  margin: 0 12px;
  border-radius: 55px;
  box-shadow: inset 16px 16px #e6e6e6, inset -16px -16px #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
  border: 1px solid lightgrey;

  & > div {
    border-radius: 55px;
    background: linear-gradient(to top, orange, red);
    animation: ${(props) => Anim(props)} 1s forwards;
  }
`;

const Digital = styled.div`
  & > strong {
    font-size: 1.5em;
  }
`;

const Temperature = ({ temperature = 0 }: { temperature?: number }) => {
  const { py, cy, range } = useTemperature(temperature);

  return (
    <Container>
      <Digital>
        <h3>Current temperature</h3>
        <strong data-testid="temperature">{temperature.toFixed(1)}</strong>
        &nbsp;&deg;C
      </Digital>
      <Thermometer $py={py} $cy={cy}>
        <div />
      </Thermometer>
      <div>
        {range.map((e, i) => {
          return <p key={`temperature_${i}`}>{e} &deg;C</p>;
        })}
      </div>
    </Container>
  );
};

export default Temperature;
