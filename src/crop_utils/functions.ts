import { DrawInput } from "../card_utils/draw_profile_card";
import { Style, Crop } from "../card_utils/types";

export function isVertical(crop: Crop) {
  return !crop.disableCanvasRotation && (crop.rotate || 0) % 180 !== 0;
}

export function getInitialSize(style: Style, width: number, height: number) {
  let newHeight: number;
  let newWidth: number;

  const canvasRatio = style.canvas.height / style.canvas.width;
  const imageRatio = height / width;

  if (canvasRatio > imageRatio) {
    newHeight = style.canvas.height;
    newWidth = width * (newHeight / height);
  } else {
    newWidth = style.canvas.width;
    newHeight = height * (newWidth / width);
  }

  return {
    height: newHeight,
    width: newWidth,
  };
}

export function getXScale(input: DrawInput) {
  const outputImageAspect = input.style.card.width / input.style.card.height;
  const inputImageAspect = input.card.picture.width / input.card.picture.height;

  return Math.min(1, outputImageAspect / inputImageAspect);
}

export function getYScale(input: DrawInput) {
  const outputImageAspect =
    input.style.picture.height / input.style.picture.width;
  const inputImageAspect = input.card.picture.height / input.card.picture.width;

  return Math.min(1, outputImageAspect / inputImageAspect);
}

export function getCroppingRect(input: DrawInput) {
  const scale = 1;

  const width = (1 / scale) * getXScale(input);
  const height = (1 / scale) * getYScale(input);

  const croppingRect = {
    x: (input.crop.x || 0) - width / 2,
    y: (input.crop.y || 0) - height / 2,
    width,
    height,
  };

  let xMin = 0;
  let xMax = 1 - croppingRect.width;
  let yMin = 0;
  let yMax = 1 - croppingRect.height;

  // If the cropping rect is larger than the image, then we need to change
  // our maxima & minima for x & y to allow the image to appear anywhere up
  // to the very edge of the cropping rect.
  const isLargerThanImage =
    input.crop.disableBoundaryChecks || width > 1 || height > 1;

  if (isLargerThanImage) {
    xMin = -croppingRect.width;
    xMax = 1;
    yMin = -croppingRect.height;
    yMax = 1;
  }

  return {
    ...croppingRect,
    x: Math.max(xMin, Math.min(croppingRect.x, xMax)),
    y: Math.max(yMin, Math.min(croppingRect.y, yMax)),
  };
}
