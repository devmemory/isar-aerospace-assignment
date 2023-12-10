import React from "react";
import ProgressBar from "react-customizable-progressbar";
import { MAX_SPEED } from "src/utils/constants";
import styled, { keyframes } from "styled-components";

const Anim = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1.0;
  }
`;

const Container = styled.div`
  background-color: var(--container-color);
  height: 100%;
  min-height: 250px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 3px var(--shadow-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SpeedText = styled.div`
  position: absolute;
  top: calc(50% - 1.4em);
  left: calc(50% - 2.3em);

  & > div:first-child {
    font-size: 1.3em;
    font-weight: bold;
  }
  & > div:last-child {
    color: #546e7a;
    font-size: 1.1em;
    animation: ${Anim} 0.5s infinite alternate;
  }
`;

const Speed = ({ velocity = 0 }: { velocity?: number }) => {
  const speed = Math.abs(velocity);
  const progress = (speed * 100) / MAX_SPEED;

  return (
    <Container>
      <ProgressBar
        radius={90}
        progress={progress}
        strokeWidth={28}
        strokeColor="var(--point-color)"
        strokeLinecap="butt"
        trackStrokeWidth={14}
        trackStrokeLinecap="butt"
        cut={120}
        rotate={-210}>
        <SpeedText>
          <div data-testid="speed">{speed.toFixed(1)}km/h</div>
          <div data-testid="reverse">{velocity < 0 && "R"}</div>
        </SpeedText>
      </ProgressBar>
    </Container>
  );
};

export default Speed;
