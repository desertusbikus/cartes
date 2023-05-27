import { Style } from "./types";

const baseStyle: Style = {
  canvas: {
    width: 512,
    height: 512,
  },

  card: {
    background_color: "#fff",
    width: 420 - 86,
    height: 508,
    radius: 20,
    border: {
      color: "#000",
      size: 0,
    },
    shadow_radius: 0,
  },
  picture: {
    top: 62,
    width: 402 - 106,
    height: 428 - 62,
  },
  name: {
    size: 30,
    top: 24,
    left: 106,
    width: 300 - 106,
    height: 26,
  },
  age: {
    size: 20,
    top: 24,
    left: 300,
    width: 360 - 300 - 4,
    height: 26,
  },
  flag: {
    top: 24,
    left: 360,
    width: 42,
    height: 26,
  },

  stats_left_align: 216,
  endurance: {
    top: 428,
    left: 106,
    width: 256 - 106,
    height: 26,
    size: 20,
  },

  climb: {
    top: 428 + 22,
    left: 106,
    width: 256 - 106,
    height: 26,
    size: 20,
  },

  offroad: {
    top: 428 + 22 * 2,
    left: 106,
    width: 256 - 106,
    height: 26,
    size: 20,
  },

  days: {
    top: 428,
    left: 282,
    width: 402 - 282,
    height: 26,
    size: 20,
  },

  stars: {
    top: 428 + 32,
    left: 282,
    width: 36,
    height: 36,
    gap: 8,
  },
};

export const racerStyle = {
  ...baseStyle,
  card: {
    ...baseStyle.card,
    background_color: "rgb(245, 191, 33)",
  },
};

console.log(racerStyle);
