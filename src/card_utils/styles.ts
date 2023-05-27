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
const card_inner_height = card_height - padding * 2;
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
  canvas: canvas,
  //
  card: {
    background_color: "#fff",
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
    size: 30,
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
};

export const racerStyle = {
  ...baseStyle,
  card: {
    ...baseStyle.card,
    background_color: "rgb(245, 191, 33)",
  },
};

console.log(racerStyle);
