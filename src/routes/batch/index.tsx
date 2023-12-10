import React from "react";
import { useQuery } from "react-query";
import Button from "src/components/Button";
import Loading from "src/components/Loading";
import StatusMonitor from "src/components/StatusMonitor";
import { StatusModel } from "src/models/statusModel";
import StatusApi from "src/services/StatusApi";
import styled from "styled-components";

const Error = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Batch = () => {
  const { isLoading, error, data, refetch } = useQuery<StatusModel>(
    "status",
    async () => {
      const api = new StatusApi();

      return await api.getStatus();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const onClick = () => {
    refetch();
  };

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
