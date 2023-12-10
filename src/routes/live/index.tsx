import React from "react";
import Button from "src/components/Button";
import Loading from "src/components/Loading";
import StatusMonitor from "src/components/StatusMonitor";
import useLive from "src/hooks/useLive";

const Live = () => {
  const { data, toggleConnection, isClosed } = useLive();

  if (data === undefined) {
    return <Loading />;
  }

  return (
    <StatusMonitor {...data}>
      <Button onClick={toggleConnection} $bg={isClosed ? undefined : 'red'}>{isClosed ? "Start" : "Stop"}</Button>
    </StatusMonitor>
  );
};

export default Live;
