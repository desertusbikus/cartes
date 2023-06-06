import { Stage, Layer, Rect, Text, Image, Group } from "react-konva";
import { Style } from "./card_utils/types";
import { ProfilePicture } from "./ProfilePicture";
import { useEffect, useRef, useState } from "react";
import useImage from "use-image";
import star from "./assets/star.png";
import starnomad from "./assets/starnomad.png";

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
  fontPercent: number;
  nickname: string;
  role: string;
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
  fontPercent,
  nickname,
  role,
}: CardProps) {
  const stageRef = useRef<Konva.Stage>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const [flagImg] = useImage(
    `https://flagcdn.com/h40/${flag.toLowerCase()}.png`,
    // `https://flagicons.lipis.dev/flags/4x3/${flag.toLowerCase()}.svg`,
    "anonymous"
  );

  const [starImg] = useImage(star);
  const [starnomadImg] = useImage(starnomad);

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
            text={style.substyle === "Racer" ? name : role}
            fontFamily={style.card.font}
            fontSize={style.name.size * (fontPercent / 100)}
            fontStyle={style.card.font_style}
            x={style.name.left}
            y={style.name.top}
            fill={style.card.font_color}
            align="left"
            width={style.name.width}
            height={style.name.height}
            verticalAlign="bottom"
          />

          {style.substyle === "Racer" && (
            <Text
              text={`${age} ans`}
              fontFamily={style.card.font}
              fontSize={style.age.size * (fontPercent / 100)}
              x={style.age.left}
              y={style.age.top}
              fill={style.card.font_color}
              align="right"
              width={style.age.width}
              height={style.age.height}
              verticalAlign="bottom"
            />
          )}
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

          {style.substyle === "Racer" && (
            <>
              <Text
                text="Endurance:"
                x={style.endurance.left}
                y={style.endurance.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.endurance.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.endurance.width}
                height={style.endurance.height}
                verticalAlign="bottom"
              />
              <Text
                text={`${endurance} %`}
                x={style.stats_left_align}
                y={style.endurance.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.endurance.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.endurance.width}
                height={style.endurance.height}
                verticalAlign="bottom"
              />
              <Text
                text="Grimpeur:"
                x={style.climb.left}
                y={style.climb.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.climb.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.climb.width}
                height={style.climb.height}
                verticalAlign="bottom"
              />
              <Text
                text={`${climb} %`}
                x={style.stats_left_align}
                y={style.climb.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.climb.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.climb.width}
                height={style.climb.height}
                verticalAlign="bottom"
              />
              <Text
                text="Hors piste:"
                x={style.offroad.left}
                y={style.offroad.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.offroad.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.offroad.width}
                height={style.offroad.height}
                verticalAlign="bottom"
              />
              <Text
                text={`${offroad} %`}
                x={style.stats_left_align}
                y={style.offroad.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.offroad.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.offroad.width}
                height={style.offroad.height}
                verticalAlign="bottom"
              />

              <Text
                text="Objectif:"
                x={style.days.left}
                y={style.days.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.days.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="left"
                width={style.days.width}
                height={style.days.height}
                verticalAlign="bottom"
              />
              <Text
                text={`${days} jours`}
                x={style.days.left}
                y={style.days.top}
                fontFamily={style.card.alternative_font}
                fontSize={style.days.size}
                fontStyle={style.card.alternative_font_style}
                fill={style.card.font_color}
                align="right"
                width={style.days.width}
                height={style.days.height}
                verticalAlign="bottom"
              />
              {[...Array(Math.floor(stars)).keys()].map((i) => (
                <Image
                  key={i}
                  image={style.style === "Desertus" ? starImg : starnomadImg}
                  x={
                    style.stars.left +
                    i * style.stars.width +
                    i * style.stars.gap
                  }
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
                    image={style.style === "Desertus" ? starImg : starnomadImg}
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
            </>
          )}
          {style.substyle === "Staff" && (
            <>
              {/* <Rect
                x={style.staffNick.left}
                y={style.staffNick.top} */}

              <Text
                text={'"' + nickname + '"'}
                fontFamily={style.card.font}
                fontSize={style.staffNick.size * (fontPercent / 100)}
                fontStyle={style.card.font_style}
                x={style.staffNick.left}
                y={style.staffNick.top}
                fill={style.card.font_color}
                align="center"
                width={style.staffNick.width}
                height={style.staffNick.height}
                verticalAlign="bottom"
              />
              <Text
                text={name}
                fontFamily={style.card.font}
                fontSize={style.staffName.size * (fontPercent / 100)}
                fontStyle={style.card.font_style}
                x={style.staffName.left}
                y={style.staffName.top}
                fill={style.card.font_color}
                align="center"
                width={style.staffName.width}
                height={style.staffName.height}
                verticalAlign="bottom"
              />
            </>
          )}
        </Layer>
      </Stage>

      <div className="my-4">
        <button
          className="bg-desert font-bold py-2 px-4  w-full"
          onClick={() => {
            if (!stageRef.current) return;
            const stage = stageRef.current;
            const link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = stage.toDataURL({ pixelRatio: 300 / 72 });
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
