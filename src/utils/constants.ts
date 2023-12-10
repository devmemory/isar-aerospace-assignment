/** - altitude range color */
export const ALTITUDE_RANGE = {
  TAO: { min: 0, max: 100, color: "rgb(229, 115, 115, 0.5)" },
  VLEO: { min: 100, max: 450, color: "rgb(255, 241, 118, 0.5)" },
  LEO: { min: 450, max: 2000, color: "rgb(129, 199, 132, 0.5)" },
  MEO: { min: 2000, max: 35786, color: "rgb(100, 181, 246, 0.5)" },
} as const;

export const ALTITUDE_ENUM = {
  TAO: 0,
  VLEO: 1,
  LEO: 2,
  MEO: 3,
  HEO: 4,
} as const;

export const ALTITUDE_INFO = [
  "Transatmospheric orbit (TAO) : ~ 100km",
  "Very Low Earth orbit (VLEO) : 100km ~ 450km",
  "Low Earth orbit (LEO) : ~ 2,000km",
  "Medium Earth orbit (MEO) : 2,000km ~ 35,786km",
  "High Earth orbit (HEO): 35,786km ~",
] as const;

export const MAX_SPEED = 100;

export const TEMPERATURE_RANGE = { min: -55, max: 150 } as const;

/** - date format */
export const DATE_FOMRAT = {
  timeOnly: "HH:mm:ss",
  dateOnly: "YYYY-MM-DD",
  iso: "YYYY-MM-DD HH:mm:ss",
} as const;
