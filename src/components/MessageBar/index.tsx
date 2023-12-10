import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routeName } from "src/utils/routeUtil";
import styled from "styled-components";

const Container = styled.div<{ $bg: string }>`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.$bg};
  color: white;
  font-size: 1.6em;
  position: relative;

  & > button {
    position: absolute;
    top: 8px;
    right: 10px;
    padding: 4px 8px;
    background-color: white;
    
  }
`;

interface props {
  isActionRequired?: boolean;
  statusMessage?: string;
}

const MessageBar = ({ isActionRequired, statusMessage }: props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLive = pathname === routeName.live;

  const toggleRoute = () => {
    const route = isLive ? routeName.batch : routeName.live;

    navigate(route);
  };

  return (
    <Container $bg={isActionRequired ? "var(--point-color)" : "#66BB6A"}>
      {statusMessage}
      <button onClick={toggleRoute}>{isLive ? "Live" : "Batch"}</button>
    </Container>
  );
};

export default MessageBar;
