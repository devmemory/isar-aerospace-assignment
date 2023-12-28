import React from "react";
import Button from "src/components/Button";
import Loading from "src/components/Loading";
import StatusMonitor from "src/components/StatusMonitor";
import useStatusQuery from "src/hooks/useStatusQuery";
import { getStatus } from "src/services/StatusApi";
import styled from "styled-components";

const Error = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Batch = () => {
  const { isLoading, error, data, refetch } = useStatusQuery(
    "status",
    getStatus
  );

  const onClick = () => refetch();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error>
        <p>Error is occured. Please try again.</p>
        <Button onClick={onClick}>Retry</Button>
      </Error>
    );
  }

  return (
    <StatusMonitor {...data}>
      <Button onClick={onClick} data-testid="new-data">
        Get new data
      </Button>
    </StatusMonitor>
  );
};

export default Batch;
