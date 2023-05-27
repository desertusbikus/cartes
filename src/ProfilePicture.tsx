import "./App.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { Style } from "./card_utils/types";
import useImage from "use-image";

import { Image, Group, Rect } from "react-konva";

import Konva from "konva";
Konva.hitOnDragEnabled = true;

type ProfilePictureProps = {
  image: string;
  style: Style;
  position: { x: number; y: number };
};

export function ProfilePicture(props: ProfilePictureProps) {
  const profilePictureRef = useRef<Konva.Image>(null);

  const [image] = useImage(props.image, "anonymous");

  const [imageDimensions, setImageDimensions] = useState({ w: 0, h: 0 });
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: 0,
    isDragging: false,
  });

  const [lastDist, setLastDist] = useState(0);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    setImagePosition({
      x: props.position.x + (props.style.picture.width - imageDimensions.w) / 2,
      y:
        props.position.y + (props.style.picture.height - imageDimensions.h) / 2,
      isDragging: false,
    });
  }, [
    props.position.x,
    props.position.y,
    imageDimensions,
    props.style.picture.width,
    props.style.picture.height,
  ]);

  useEffect(() => {
    const wr = props.style.picture.width / (image?.width || 1);
    const hr = props.style.picture.height / (image?.height || 1);

    const r = wr > hr ? wr : hr;

    setImageDimensions({
      w: (image?.width || 1) * r,
      h: (image?.height || 1) * r,
    });
  }, [image, props]);

  const bounds = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      const cx = Math.max(
        Math.min(props.position.x / scale, x),
        props.position.x + props.style.picture.width - imageDimensions.w * scale
      );
      const cy = Math.max(
        Math.min(props.position.y / scale, y),
        props.position.y +
          props.style.picture.height -
          imageDimensions.h * scale
      );
      return {
        x: cx,
        y: cy,
      };
    },
    [props, scale, imageDimensions]
  );

  return (
    <>
      {/* <Text text={`${imagePosition.x}, ${imagePosition.y}`} /> */}
      <Group
        // A group around the picture to clip it to the right size
        clipX={props.position.x}
        clipY={props.position.y}
        clipHeight={props.style.picture.height}
        clipWidth={props.style.picture.width}
        onMouseEnter={() => {
          if (!profilePictureRef.current) return;
          const stage = profilePictureRef.current.getStage();
          if (!stage) return;
          stage.container().style.cursor = "grab";
        }}
        onMouseLeave={() => {
          if (!profilePictureRef.current) return;
          const stage = profilePictureRef.current.getStage();
          if (!stage) return;
          stage.container().style.cursor = "";
        }}
        onTouchEnd={() => {
          setLastDist(0);
        }}
        onTouchMove={(e) => {
          if (!profilePictureRef.current) return;
          const touch1 = e.evt.touches[0];
          const touch2 = e.evt.touches[1];

          if (touch1 && touch2) {
            const dist = Math.sqrt(
              Math.pow(touch1.clientX - touch2.clientX, 2) +
                Math.pow(touch1.clientY - touch2.clientY, 2)
            );

            // const midpoint = {
            //   x: (touch1.clientX + touch2.clientX) / 2,
            //   y: (touch1.clientY + touch2.clientY) / 2,
            // };

            setLastDist(dist);

            if (lastDist <= 0) {
              return;
            }
            // const oldScale = scale;
            let newScale = (scale * dist) / lastDist;

            // const position = {
            //   x: (midpoint.x - profilePictureRef.current.x()) / oldScale,
            //   y: (midpoint.y - profilePictureRef.current.y()) / oldScale,
            // };

            newScale = Math.max(1, newScale);

            setScale(newScale);

            const newPos = bounds({ x: imagePosition.x, y: imagePosition.y });
            setImagePosition({ x: newPos.x, y: newPos.y, isDragging: false });

            // const newPos = {
            //   x: midpoint.x - position.x * newScale,
            //   y: midpoint.y - position.y * newScale,
            // };
            // setImagePosition({ x: newPos.x, y: newPos.y, isDragging: false });
          }
        }}
        onWheel={(e) => {
          if (!profilePictureRef.current) return;

          e.evt.preventDefault();

          const oldScale = scale;

          // how to scale? Zoom in? Or zoom out?
          let direction = e.evt.deltaY > 0 ? 1 : -1;

          const position = {
            x: (e.evt.offsetX - profilePictureRef.current.x()) / oldScale,
            y: (e.evt.offsetY - profilePictureRef.current.y()) / oldScale,
          };

          // when we zoom on trackpad, e.evt.ctrlKey is true
          // in that case lets revert direction
          if (e.evt.ctrlKey) {
            direction = -direction;
          }

          const scaleBy = 1.05;

          let newScale =
            direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

          newScale = Math.max(1, newScale);
          setScale(newScale);

          const newPos = bounds({
            x: e.evt.offsetX - position.x * newScale,
            y: e.evt.offsetY - position.y * newScale,
          });
          setImagePosition({ x: newPos.x, y: newPos.y, isDragging: false });
        }}
      >
        {/* A white rectangle behind the image so that we always draw something, and that we can catch mouse events*/}
        <Rect
          x={props.position.x}
          y={props.position.y}
          width={props.style.picture.width}
          height={props.style.picture.height}
          fill="white"
          strokeWidth={2}
        />
        <Image
          ref={profilePictureRef}
          image={image}
          width={imageDimensions.w}
          height={imageDimensions.h}
          x={imagePosition.x}
          y={imagePosition.y}
          draggable
          onDragEnd={(e) => {
            setImagePosition({
              x: e.target.x(),
              y: e.target.y(),
              isDragging: false,
            });
          }}
          dragBoundFunc={(pos) => bounds(pos)}
          scale={{ x: scale, y: scale }}
        />
      </Group>
    </>
  );
}
