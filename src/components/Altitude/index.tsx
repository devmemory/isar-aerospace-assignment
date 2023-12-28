import React from "react";
import { Line } from "react-chartjs-2";
import useAltitude from "src/hooks/useAltitude";
import { ALTITUDE_INFO } from "src/utils/constants";
import styled from "styled-components";
import Table from "./Table";

const Container = styled.div`
  width: 100%;
  background-color: var(--container-color);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 3px var(--shadow-color);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > canvas {
    min-width: 100%;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    font-weight: 500;

    & > img {
      width: 16px;
      height: 16px;
      margin-left: 4px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;

        & + ul {
          display: block;
        }
      }
    }
  }
`;

const InfoUl = styled.ul`
  display: none;
  padding: 12px 40px;
  background-color: white;
  box-shadow: 0 0 5px var(--shadow-color);
  position: absolute;
  text-align: left;
  list-style-type: disc;
  transform: translateY(80px);
  z-index: 2;
`;

const InfoLi = styled.li<{ $highlight: boolean }>`
  color: ${(props) => (props.$highlight ? "var(--point-color)" : "unset")};
  font-wight: 600;
`;

const Altitude = ({ altitude = 0 }: { altitude?: number }) => {
  const { data, options, location } = useAltitude(altitude);

  if (data === undefined) {
    return <></>;
  }

  return (
    <Container>
      <Line height={45} data={data} options={options} data-testid="chart" />
      <Table data={data}/>
      <div data-testid="location">
        {location?.msg}
        <img src="/assets/img/info.svg" />
        <InfoUl>
          {ALTITUDE_INFO.map((e, i) => {
            return (
              <InfoLi key={`info_${i}`} $highlight={i === location?.value}>
                {e}
              </InfoLi>
            );
          })}
        </InfoUl>
      </div>
    </Container>
  );
};

export default Altitude;
