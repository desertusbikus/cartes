export type TextElement = {
  top: number;
  left: number;
  width: number;
  height: number;
  size: number;
};

export type Style = {
  style: string;
  substyle: string;

  canvas: {
    width: number;
    height: number;
  };

  card: {
    width: number;
    height: number;
    radius: number;

    background_color: string;
    font: string;
    font_color: string;
    font_style: string;
    alternative_font: string;
    alternative_font_color: string;
    alternative_font_style: string;

    border: {
      color: string;
      size: number;
    };

    shadow_radius: number;
  };

  // Picture attributes
  picture: {
    top: number;
    width: number;
    height: number;
  };

  name: TextElement;

  age: TextElement;

  flag: {
    top: number;
    left: number;
    width: number;
    height: number;
  };

  // Stats
  stats_left_align: number;
  endurance: TextElement;
  offroad: TextElement;
  climb: TextElement;

  // Objectives
  days: TextElement;
  stars: {
    top: number;
    left: number;
    height: number;
    width: number;
    gap: number;
  };

  // Staff
  staffNick: TextElement;
  staffName: TextElement;
};

export type Card = {
  name: string;
  country: string;
  flag: string;
  age: number;

  // Stats
  road: number;
  offroad: number;
  climb: number;

  // Objectives
  days: number;
  stars: number;

  // Picture
  picture: {
    img: CanvasImageSource | null;
    width: number;
    height: number;
  };
};
