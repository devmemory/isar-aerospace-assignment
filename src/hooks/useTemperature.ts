import { useEffect, useState } from "react";
import { TEMPERATURE_RANGE } from "src/utils/constants";

const useTemperature = (temperature: number) => {
  const [py, setPy] = useState<string>("0%");
  const [cy, setCy] = useState<string>("0%");

  useEffect(() => {
    setCy(getPercent(temperature));

    return () => {
      setPy(getPercent(temperature));
    };
  }, [temperature]);

  /** - thermometer percent */
  function getPercent(value: number) {
    return `${
      ((value - TEMPERATURE_RANGE.min) * 100) /
      (TEMPERATURE_RANGE.max - TEMPERATURE_RANGE.min)
    }%`;
  }

  return {
    py,
    cy,
    range: [TEMPERATURE_RANGE.max, 0, TEMPERATURE_RANGE.min],
  };
};

export default useTemperature;
