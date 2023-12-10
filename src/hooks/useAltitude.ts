import {
  CategoryScale,
  Chart,
  ChartData,
  LineElement,
  LinearScale,
  PointElement,
  TimeSeriesScale,
  Tooltip,
  Legend,
} from "chart.js";
import * as ChartJSAdapterDayjs from "chartjs-adapter-dayjs-3";
import annotationPlugin from "chartjs-plugin-annotation";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { AnnotationType } from "src/components/Altitude/BoxType";
import {
  ALTITUDE_ENUM,
  ALTITUDE_RANGE,
  DATE_FOMRAT,
} from "src/utils/constants";

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  annotationPlugin,
  LineElement,
  TimeSeriesScale,
  Tooltip,
  Legend,
  ChartJSAdapterDayjs
);

const useAltitude = (altitude: number) => {
  const [data, setData] = useState<ChartData<"line", any[], any>>();
  const absAltitude = Math.abs(altitude);

  useEffect(() => {
    setData((state) => {
      // init or show less than 200 points
      if (state?.labels?.length === 200 || state === undefined) {
        return {
          labels: [dayjs().format(DATE_FOMRAT.iso)],
          datasets: [
            {
              label: "Altitude(km)",
              data: [absAltitude],
              fill: false,
              borderWidth: 5,
              backgroundColor: "#E53935",
              borderColor: "#E53935",
            },
          ],
        };
      }

      return {
        labels: [...state.labels!, dayjs().format(DATE_FOMRAT.iso)],
        datasets: [
          {
            ...state.datasets[0],
            data: [...state.datasets[0].data, absAltitude],
          },
        ],
      };
    });
  }, [altitude]);

  /** - axis label */
  const getScales = () => {
    const ticks = {
      font: {
        size: 14,
      },
    };

    return {
      y: {
        beginAtZero: true,
        ticks,
      },
      x: {
        ticks: { ...ticks, maxTicksLimit: 5 },
        type: "timeseries" as const,
        time: {
          unit: "second" as const,
          displayFormats: {
            day: "DD H:mm:ss",
          },
        },
      },
    };
  };

  /** - range list */
  const getPlugin = () => {
    const annotations: AnnotationType = {
      box1: {
        type: "box",
        yMin: ALTITUDE_RANGE.TAO.min,
        yMax: ALTITUDE_RANGE.TAO.max,
        backgroundColor: ALTITUDE_RANGE.TAO.color,
      },
      box2: {
        type: "box",
        yMin: ALTITUDE_RANGE.VLEO.min,
        yMax: ALTITUDE_RANGE.VLEO.max,
        backgroundColor: ALTITUDE_RANGE.VLEO.color,
      },
      box3: {
        type: "box",
        yMin: ALTITUDE_RANGE.LEO.min,
        yMax: ALTITUDE_RANGE.LEO.max,
        backgroundColor: ALTITUDE_RANGE.LEO.color,
      },
    };

    return {
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 18,
        },
        bodyFont: {
          size: 20,
        },
        callbacks: {
          label: function (context: any) {
            return ` Altitude : ${Number(context.raw).toFixed(1)} km`;
          },
        },
      },
      annotation: { annotations: { ...annotations } },
    };
  };

  /** - to show where spacecraft is located */
  const location = () => {
    if (altitude === undefined) {
      return;
    }

    if (absAltitude < ALTITUDE_RANGE.TAO.max) {
      return {
        msg: "Spacecraft is located in Transatmospheric orbit",
        value: ALTITUDE_ENUM.TAO,
      };
    }

    if (
      absAltitude >= ALTITUDE_RANGE.VLEO.min &&
      absAltitude < ALTITUDE_RANGE.VLEO.max
    ) {
      return {
        msg: "Spacecraft is located in Very Low Earth orbit",
        value: ALTITUDE_ENUM.VLEO,
      };
    }

    if (
      absAltitude >= ALTITUDE_RANGE.LEO.min &&
      absAltitude < ALTITUDE_RANGE.LEO.max
    ) {
      return {
        msg: "Spacecraft is located in Low Earth orbit",
        value: ALTITUDE_ENUM.LEO,
      };
    }

    if (
      absAltitude >= ALTITUDE_RANGE.MEO.min &&
      absAltitude < ALTITUDE_RANGE.MEO.max
    ) {
      return {
        msg: "Spacecraft is located in Medium Earth orbit",
        value: ALTITUDE_ENUM.MEO,
      };
    }

    return {
      msg: "Spacecraft is located in High Earth orbit",
      value: ALTITUDE_ENUM.HEO,
    };
  };

  return {
    data,
    location: location(),
    options: {
      scales: getScales(),
      plugins: getPlugin(),
    },
  };
};

export default useAltitude;
