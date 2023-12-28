import { StatusModel } from "src/models/statusModel";

type callbackType = React.Dispatch<
  React.SetStateAction<StatusModel | undefined>
>;

const StatusSocket = (callback: callbackType) => {
  let socket: WebSocket;

  let stopFlag = false;
  let changeData = true;

  /** - connect socket */
  const connect = () => {
    socket = new WebSocket(`ws://${window.location.host}/api/SpectrumWS`);

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

      // re connect if socket is closed by error and make sure if it's closed
      if (socket.readyState === socket.CLOSED) {
        setTimeout(() => {
          connect();
        }, 3000);
      }
    };

    socket.onmessage = (e) => {
      if (!changeData) {
        return;
      }

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
    setChangeData: (value: boolean) => {
      changeData = value;
    },
  };
};

export default StatusSocket;
