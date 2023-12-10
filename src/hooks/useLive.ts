import React, { useEffect, useRef, useState } from "react";
import { StatusModel } from "src/models/statusModel";
import StatusSocket from "src/services/StatusSocket";

interface SocketInterface {
  close: () => boolean;
  reconnect: () => boolean;
}

const useLive = () => {
  const [data, setData] = useState<StatusModel>();
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const ref = useRef<SocketInterface>();

  useEffect(() => {
    ref.current = StatusSocket(setData);

    return () => {
      ref.current?.close();
    };
  }, []);

  /** - toggle socket connection */
  const toggleConnection = () => {
    let stopFlag: boolean;

    if (isClosed) {
      stopFlag = ref.current!.reconnect();
    } else {
      stopFlag = ref.current!.close();
    }

    setIsClosed(stopFlag);
  };

  return { data, toggleConnection, isClosed };
};

export default useLive;
