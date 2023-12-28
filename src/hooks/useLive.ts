import { useEffect, useRef, useState } from "react";
import { StatusModel } from "src/models/statusModel";
import { getAction } from "src/services/StatusApi";
import StatusSocket from "src/services/StatusSocket";
import useStatusQuery from "./useStatusQuery";

interface SocketInterface {
  close: () => boolean;
  reconnect: () => boolean;
  setChangeData: (value: boolean) => void;
}

const useLive = () => {
  const { refetch } = useStatusQuery("action", getAction, false);
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
      ref.current!.setChangeData(false);
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
    try {
      refetch();

      setShowPopup(false);
    } catch (e) {
      alert(`Failed to send action : ${e}`);
    } finally {
      ref.current!.setChangeData(true);
    }
  };

  return {
    data,
    toggleConnection,
    isClosed,
    showPopup,
    sendAction,
    closePopup: () => {
      setShowPopup(false);
      ref.current!.setChangeData(true);
    },
  };
};

export default useLive;
