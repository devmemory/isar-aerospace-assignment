import React from "react";
import Button from "src/components/Button";
import Loading from "src/components/Loading";
import Popup from "src/components/Popup";
import StatusMonitor from "src/components/StatusMonitor";
import useLive from "src/hooks/useLive";
import styled from "styled-components";

const PopupContent = styled.div`
  padding: 8px 16px;

  & > p {
    margin-bottom: 12px;
    font-size: 1.4em;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Live = () => {
  const {
    data,
    toggleConnection,
    isClosed,
    showPopup,
    sendAction,
    closePopup,
  } = useLive();

  if (data === undefined) {
    return <Loading />;
  }

  return (
    <>
      <StatusMonitor {...data}>
        <Button onClick={toggleConnection} $bg={isClosed ? undefined : "red"}>
          {isClosed ? "Start" : "Stop"}
        </Button>
      </StatusMonitor>
      {showPopup && (
        <Popup closePopup={closePopup}>
          <PopupContent>
            <p>Do you want to act on spectrum?</p>
            <div>
              <Button onClick={sendAction}>Yes</Button>
              <Button $bg="red" $margin="0 0 0 8px" onClick={closePopup}>
                No
              </Button>
            </div>
          </PopupContent>
        </Popup>
      )}
    </>
  );
};

export default Live;
