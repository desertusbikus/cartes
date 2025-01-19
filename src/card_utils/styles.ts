import cosmos from "../assets/cosmos.png";
import { Style } from "./types";

const canvas = {
  width: 512,
  height: 512,
};

const padding = 16;
//
const card_width = 334;
const card_height = 492;
const card_left = (canvas.width - card_width) / 2;
const card_top = (canvas.height - card_height) / 2;
const card_inner_width = card_width - padding * 2;
const card_bottom = card_top + card_height;
//
const left = card_left + padding;
const right = left + card_inner_width;

// Top row
const top_row = card_top + padding;
const top_row_height = 26;
const top_row_spacing = 4;

const name_width = 200;
const flag_width = 42;

//
const picture_top = top_row + top_row_height;

//
const bottom_row_height = 20;
const bottom_row_spacing = 4;

const bottom_section_height =
  bottom_row_height * 3 + bottom_row_spacing * 3 + padding;

const bottom_section_top = card_bottom - bottom_section_height;

const bottom_column_width = card_inner_width / 2 - padding;
const bottom_right_column_left = right - bottom_column_width;
const star_gap = 8;
const star_dim = (bottom_column_width - 2 * star_gap) / 3;

const baseStyle: Style = {
  style: "Base",
  substyle: "Base",
  //
  canvas: canvas,
  //
  card: {
    background_color: "#fff",
    background_image: null,
    font: "Barlow Condensed",
    font_color: "#000",
    font_style: "bold",
    alternative_font: "Barlow Condensed",
    alternative_font_color: "#000",
    alternative_font_style: "bold",
    width: card_width,
    height: card_height,
    radius: 20,
    border: {
      color: "#000",
      size: 0,
    },
    shadow_radius: 10,
  },
  //
  name: {
    size: 28,
    top: top_row,
    left: left,
    width: name_width,
    height: top_row_height,
  },
  age: {
    size: 20,
    top: top_row,
    left: left + name_width + top_row_spacing,
    width: card_inner_width - name_width - flag_width - top_row_spacing * 2,
    height: top_row_height,
  },
  flag: {
    top: top_row,
    left: right - flag_width,
    width: flag_width,
    height: top_row_height,
  },
  //
  picture: {
    top: picture_top,
    width: card_inner_width,
    height:
      card_top + card_height - picture_top - bottom_section_height - padding,
  },
  //

  stats_left_align: 200,
  endurance: {
    top: bottom_section_top,
    left: left,
    width: bottom_column_width,
    height: bottom_row_height,
    size: bottom_row_height,
  },

  climb: {
    top: bottom_section_top + bottom_row_height + bottom_row_spacing,
    left: left,
    width: bottom_column_width,
    height: bottom_row_height,
    size: bottom_row_height,
  },

  offroad: {
    top: bottom_section_top + bottom_row_height * 2 + bottom_row_spacing * 2,
    left: left,
    width: bottom_column_width,
    height: bottom_row_height,
    size: bottom_row_height,
  },

  days: {
    top: bottom_section_top,
    left: bottom_right_column_left,
    width: bottom_column_width,
    height: bottom_row_height,
    size: bottom_row_height,
  },

  stars: {
    top: bottom_section_top + bottom_row_height * 1.5,
    left: bottom_right_column_left,
    width: star_dim,
    height: star_dim,
    gap: star_gap,
  },

  staffNick: {
    top: bottom_section_top + 4,
    left: left,
    width: card_inner_width,
    height: 32,
    size: 32,
  },
  staffName: {
    top: bottom_section_top + 36,
    left: left,
    width: card_inner_width,
    height: 32,
    size: 24,
  },
};

export const desertusStyle = {
  ...baseStyle,
  style: "Desertus",
  substyle: "Racer",
  card: {
    ...baseStyle.card,
    background_color: "rgb(245, 191, 33)",
  },
};

export const desertusStaffStyle = {
  ...baseStyle,
  style: "DesertusStaff",
  substyle: "Staff",
  card: {
    ...baseStyle.card,
    background_color: "#fff",
  },
};

export const nomadianStyle = {
  ...baseStyle,
  style: "Nomadian",
  substyle: "Racer",
  card: {
    ...baseStyle.card,
    background_color: "rgb(0, 0, 0)",
    font_style: "normal",

    font: "Chaumont",
    font_color: "#d19356",

    alternative_font: "Barlow Condensed",
    alternative_font_color: "#d19356",
    alternative_font_style: "bold",
  },
};

export const nomadianStaffStyle = {
  ...nomadianStyle,
  style: "Nomadian",
  substyle: "Staff",
  card: {
    ...nomadianStyle.card,
    font_color: "#fff",
    background_color: "rgb(0, 0, 0)",
  },
};

export const r66Style = {
  ...baseStyle,
  style: "Road66",
  substyle: "Racer",
  card: {
    ...baseStyle.card,
    background_color: "#3a4c58",
    border: {
      color: "#e3a629",
      size: 10,
    },
    font_color: "#fff",
  },
};

export const r66StaffStyle = {
  ...baseStyle,
  style: "Road66Staff",
  substyle: "Staff",
  card: {
    ...baseStyle.card,
    background_color: "#fff",
  },
};

export const CosmosStyle = {
  ...baseStyle,
  style: "Cosmos",
  substyle: "Racer",
  card: {
    ...baseStyle.card,
    background_color: "#000",
    background_image: cosmos,
    font_color: "#fecc20",
    font: "Nasa",
  },
  name: {
    // width: 300,
    // size: 32,
    ...baseStyle.name,
    width: 200,
    size: 22,
  },
  age: {
    ...baseStyle.age,
    // width: 100,
    width: 80,
    left: left + 150 + 16,
    size: 16,
  },
};

export const CosmosStaffStyle = {
  ...baseStyle,
  style: "CosmosStaff",
  substyle: "Staff",
  card: {
    ...baseStyle.card,
    background_color: "#fff",
  },
};

export const styles = {
  Desertus: {
    Racer: desertusStyle,
    Staff: desertusStaffStyle,
  },
  Nomadian: {
    Racer: nomadianStyle,
    Staff: nomadianStaffStyle,
  },
  Road66: {
    Racer: r66Style,
    Staff: r66StaffStyle,
  },
  Cosmos: {
    Racer: CosmosStyle,
    Staff: CosmosStaffStyle,
  },
};
export type StyleName = keyof typeof styles;
export type SubstyleName = keyof (typeof styles)[StyleName];
