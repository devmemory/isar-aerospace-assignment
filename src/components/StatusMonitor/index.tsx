import React from "react";
import { StatusModel } from "src/models/statusModel";
import styled from "styled-components";
import Altitude from "../Altitude";
import Direction from "../Direction";
import MessageBar from "../MessageBar";
import Temperature from "../Temperature";
import Speed from "../Speed";

const Layout = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: var(--background-color);
  text-align: center;
  display: flex;
  flex-direction: column;

  & > div:last-child {
    padding: 18px;
  }
`;

const BelowComp = styled.div`
  margin: 10px 0;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: unset;
    flex-direction: column;
    justify-content: center;
  }
`;

interface props extends StatusModel {
  children?: JSX.Element;
}

const StatusMonitor = ({
  children,
  statusMessage,
  isActionRequired,
  altitude,
  velocity,
  temperature,
  isAscending,
}: props) => {
  return (
    <Layout>
      <MessageBar
        statusMessage={statusMessage}
        isActionRequired={isActionRequired}
      />
      <div>
        <Altitude altitude={altitude} />
        <BelowComp>
          <Speed velocity={velocity} />
          <Direction isAscending={isAscending} />
          <Temperature temperature={temperature} />
        </BelowComp>
        {children}
      </div>
    </Layout>
  );
};

export default StatusMonitor;
