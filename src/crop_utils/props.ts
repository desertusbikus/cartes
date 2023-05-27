import { Card, Style } from "../card_utils/types";

export interface ImageState {
  width?: number;
  height?: number;
  resource?: HTMLImageElement;
}

export interface CropInput {
  rotate?: number;
  scale?: number;

  disableBoundaryChecks?: boolean;
  disableHiDPIScaling?: boolean;
  disableCanvasRotation?: boolean;
}

export interface Props {
  card: Card;
  style: Style;
  crop: CropInput;
}
