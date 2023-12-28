import React, { useEffect, useRef, useState } from "react";
import { StatusModel } from "src/models/statusModel";
import StatusApi from "src/services/StatusApi";
import StatusSocket from "src/services/StatusSocket";

interface SocketInterface {
  close: () => boolean;
  reconnect: () => boolean;
}

const useLive = () => {
  const [data, setData] = useState<StatusModel>();
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const ref = useRef<SocketInterface>();

  useEffect(() => {
    ref.current = StatusSocket(setData);

    return () => {
      ref.current?.close();
    };
  }, []);

  useEffect(() => {
    if (data?.isActionRequired) {
      setShowPopup(true);
      toggleConnection();
    }
  }, [data]);

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

  /** - send action when action is required */
  const sendAction = async () => {
    const api = new StatusApi();

    try {
      await api.getAction();

      setShowPopup(false);
    } catch (e) {
      alert(`Failed to send action : ${e}`);
    } finally {
      toggleConnection();
    }
  };

  return {
    data,
    toggleConnection,
    isClosed,
    showPopup,
    sendAction,
    closePopup: () => {
      toggleConnection();
      setShowPopup(false);
    },
  };
};

export default useLive;
