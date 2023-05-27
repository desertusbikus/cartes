import { Stage, Layer, Rect, Text, Image, Group } from "react-konva";
import { Style } from "./card_utils/types";
import { ProfilePicture } from "./ProfilePicture";
import { useEffect, useRef, useState } from "react";
import useImage from "use-image";
import star from "./assets/star.png";
import Konva from "konva";

type CardProps = {
  style: Style;

  flag: string;
  name: string;
  age: number;
  endurance: number;
  offroad: number;
  climb: number;
  days: number;
  stars: number;
  image: string;
};

export function Card({
  style,
  image,
  name,
  age,
  flag,
  endurance,
  offroad,
  climb,
  days,
  stars,
}: CardProps) {
  const stageRef = useRef<Konva.Stage>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const [flagImg] = useImage(
    `https://flagcdn.com/h40/${flag.toLowerCase()}.png`,
    // `https://flagicons.lipis.dev/flags/4x3/${flag.toLowerCase()}.svg`,
    "anonymous"
  );

  const [flagImg2, setFlagImg2] = useState<HTMLImageElement | undefined>(
    undefined
  );

  const [starImg] = useImage(star);

  useEffect(() => {
    setImagePosition({
      x:
        (style.canvas.width - style.card.width) / 2 +
        (style.card.width - style.picture.width) / 2,
      y: (style.canvas.height - style.card.height) / 2 + style.picture.top,
    });
  }, [
    style.canvas.height,
    style.canvas.width,
    style.card.height,
    style.card.width,
    style.picture.top,
    style.picture.width,
  ]);

  return (
    <div>
      <Stage
        width={style.canvas.width}
        height={style.canvas.height}
        ref={stageRef}
      >
        <Layer>
          <Rect
            width={style.card.width}
            height={style.card.height}
            x={(style.canvas.width - style.card.width) / 2}
            y={(style.canvas.height - style.card.height) / 2}
            fill={style.card.background_color}
            stroke={style.card.border.color}
            strokeWidth={style.card.border.size}
            cornerRadius={style.card.radius}
            shadowBlur={style.card.shadow_radius}
            shadowColor="black"
          />
          <Text
            text={name}
            fontFamily="Barlow Condensed"
            fontSize={style.name.size}
            fontStyle="bold"
            x={style.name.left}
            y={style.name.top}
            align="left"
            width={style.name.width}
            height={style.name.height}
            verticalAlign="bottom"
          />

          <Text
            text={`${age} ans`}
            fontFamily="Barlow Condensed"
            fontSize={style.age.size}
            x={style.age.left}
            y={style.age.top}
            align="right"
            width={style.age.width}
            height={style.age.height}
            verticalAlign="bottom"
          />
          <Image
            image={flagImg}
            x={style.flag.left}
            y={style.flag.top}
            width={style.flag.width}
            height={style.flag.height}
          />
          <ProfilePicture
            image={image}
            style={style}
            position={imagePosition}
          />

          <Text
            text="Endurance:"
            x={style.endurance.left}
            y={style.endurance.top}
            fontFamily="Barlow Condensed"
            fontSize={style.endurance.size}
            fontStyle="bold"
            align="left"
            width={style.endurance.width}
            height={style.endurance.height}
            verticalAlign="bottom"
          />
          <Text
            text={`${endurance} %`}
            x={style.stats_left_align}
            y={style.endurance.top}
            fontFamily="Barlow Condensed"
            fontSize={style.endurance.size}
            fontStyle="bold"
            align="left"
            width={style.endurance.width}
            height={style.endurance.height}
            verticalAlign="bottom"
          />
          <Text
            text="Grimpeur:"
            x={style.climb.left}
            y={style.climb.top}
            fontFamily="Barlow Condensed"
            fontSize={style.climb.size}
            fontStyle="bold"
            align="left"
            width={style.climb.width}
            height={style.climb.height}
            verticalAlign="bottom"
          />
          <Text
            text={`${climb} %`}
            x={style.stats_left_align}
            y={style.climb.top}
            fontFamily="Barlow Condensed"
            fontSize={style.climb.size}
            fontStyle="bold"
            align="left"
            width={style.climb.width}
            height={style.climb.height}
            verticalAlign="bottom"
          />
          <Text
            text="Hors piste:"
            x={style.offroad.left}
            y={style.offroad.top}
            fontFamily="Barlow Condensed"
            fontSize={style.offroad.size}
            fontStyle="bold"
            align="left"
            width={style.offroad.width}
            height={style.offroad.height}
            verticalAlign="bottom"
          />
          <Text
            text={`${offroad} %`}
            x={style.stats_left_align}
            y={style.offroad.top}
            fontFamily="Barlow Condensed"
            fontSize={style.offroad.size}
            fontStyle="bold"
            align="left"
            width={style.offroad.width}
            height={style.offroad.height}
            verticalAlign="bottom"
          />

          <Text
            text="Objectif:"
            x={style.days.left}
            y={style.days.top}
            fontFamily="Barlow Condensed"
            fontSize={style.days.size}
            fontStyle="bold"
            align="left"
            width={style.days.width}
            height={style.days.height}
            verticalAlign="bottom"
          />
          <Text
            text={`${days} jours`}
            x={style.days.left}
            y={style.days.top}
            fontFamily="Barlow Condensed"
            fontSize={style.days.size}
            fontStyle="bold"
            align="right"
            width={style.days.width}
            height={style.days.height}
            verticalAlign="bottom"
          />
          {[...Array(Math.floor(stars)).keys()].map((i) => (
            <Image
              key={i}
              image={starImg}
              x={style.stars.left + i * style.stars.width + i * style.stars.gap}
              y={style.stars.top}
              width={style.stars.width}
              height={style.stars.height}
            />
          ))}
          {stars - Math.floor(stars) > 0 && (
            <Group
              clipX={
                style.stars.left +
                Math.floor(stars) * style.stars.height +
                Math.floor(stars) * style.stars.gap
              }
              clipY={style.stars.top}
              clipWidth={style.stars.width * (stars - Math.floor(stars))}
              clipHeight={style.stars.height}
            >
              <Image
                image={starImg}
                x={
                  style.stars.left +
                  Math.floor(stars) * style.stars.height +
                  Math.floor(stars) * style.stars.gap
                }
                y={style.stars.top}
                width={style.stars.width}
                height={style.stars.height}
              />
            </Group>
          )}
        </Layer>
      </Stage>

      <div className="my-4">
        <button
          className="bg-desert  font-bold py-2 px-4  w-full"
          onClick={() => {
            if (!stageRef.current) return;
            const stage = stageRef.current;

            console.log(stage.toDataURL());

            const link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = stage.toDataURL();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Générer
        </button>
      </div>
    </div>
  );
}
