import { StatusModel } from "src/models/statusModel";
import StatusApi from "./StatusApi";

type callbackType = React.Dispatch<
  React.SetStateAction<StatusModel | undefined>
>;

const StatusSocket = (callback: callbackType) => {
  let socket: WebSocket;

  let stopFlag = false;

  const api = new StatusApi();

  /** - connect socket */
  const connect = () => {
    socket = new WebSocket(
      `ws://${window.location.host}/api/SpectrumWS`
    );

    socket.onopen = (e) => {
      console.log("[socket] connected", { e });
    };

    socket.onerror = (e) => {
      console.log("[socket] error", { e });
    };

    socket.onclose = (e) => {
      console.log("[socket] closed", { e });

      if (stopFlag) {
        return;
      }

      // re connect if socket is closed by error
      setTimeout(() => {
        connect();
      }, 1000);
    };

    socket.onmessage = (e) => {
      const {
        Velocity: velocity,
        Altitude: altitude,
        Temperature: temperature,
        StatusMessage: statusMessage,
        IsAscending: isAscending,
        IsActionRequired: isActionRequired,
      } = JSON.parse(e.data);

      const data: StatusModel = {
        velocity,
        altitude,
        temperature,
        statusMessage,
        isAscending,
        isActionRequired,
      };

      console.log("[socket] data", { data });

      if (isActionRequired) {
        api.getAction();
      }

      callback(data);
    };
  };

  connect();

  return {
    close: () => {
      stopFlag = true;
      socket.close();

      return stopFlag;
    },
    reconnect: () => {
      stopFlag = false;
      connect();

      return stopFlag;
    },
  };
};

export default StatusSocket;
