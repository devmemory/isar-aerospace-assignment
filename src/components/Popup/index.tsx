import React from "react";
import ModalPortal from "./ModalPortal";
import styled, { keyframes } from "styled-components";

const Dialog = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 3px var(--shadow-color);
  }
`;

const Bg = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  & > div {
    max-width: 640px;
    background-color: white;
    animation: ${Dialog} 0.8s ease forwards;
    border-radius: 8px;
    overflow: hidden;
  }
`;

interface props {
  children: JSX.Element | string;
  closePopup?: () => void;
}

const Popup = ({ children, closePopup }: props) => {
  return (
    <ModalPortal>
      <Bg onClick={closePopup}>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </Bg>
    </ModalPortal>
  );
};

export default Popup;
