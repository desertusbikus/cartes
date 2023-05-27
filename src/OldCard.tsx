import {
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// import Dropzone from "./Dropzone";
import { Props } from "./crop_utils/props";
import { isTouchDevice } from "./crop_utils/isTouchDevice";
import { isPassiveSupported } from "./crop_utils/isPassiveSupported";
import { draw_profile_card } from "./card_utils/draw_profile_card";

import { Crop } from "./card_utils/types";

function Card(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [drag, setDrag] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null
  );

  const [crop, setCrop] = useState<Crop>({
    x: 0,
    y: 0,
    scale: 1,
  });

  useEffect(() => {
    setCrop({
      ...props.crop,
      x: 0,
      y: 0,
      scale: 1,
    });
  }, [props.crop]);

  const handleMouseDown: MouseEventHandler<HTMLCanvasElement> = (e) => {
    // if e is a touch event, preventDefault keeps
    // corresponding mouse events from also being fired
    // later.
    e.preventDefault();
    setDrag(true);
    setDragStart(null);
  };

  const handleTouchStart: TouchEventHandler<HTMLCanvasElement> = () => {
    setDrag(true);
    setDragStart(null);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!drag) {
        return;
      }

      console.log("handleMouseMove", drag, crop);

      e.preventDefault(); // stop scrolling on iOS Safari

      const mousePositionX =
        "targetTouches" in e ? e.targetTouches[0].pageX : e.clientX;
      const mousePositionY =
        "targetTouches" in e ? e.targetTouches[0].pageY : e.clientY;

      if (dragStart === null) {
        setDragStart({ x: mousePositionX, y: mousePositionY });
        return;
      }

      setCrop({
        x: crop.x - mousePositionX + dragStart.x,
        y: crop.y - mousePositionY + dragStart.y,
        scale: crop.scale,
      });
      setDragStart({ x: mousePositionX, y: mousePositionY });
    },
    [drag, crop, dragStart]
  );

  useEffect(() => {
    // Component Creation
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const context = canvas.getContext("2d");
    if (context === null) return;

    const handleMouseUp = () => {
      if (drag) {
        console.log("handleMouseUp");
        setDrag(false);
      }
    };

    const options = isPassiveSupported() ? { passive: false } : false;
    document.addEventListener("mousemove", handleMouseMove, options);
    document.addEventListener("mouseup", handleMouseUp, options);

    if (isTouchDevice) {
      document.addEventListener("touchmove", handleMouseMove, options);
      document.addEventListener("touchend", handleMouseUp, options);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);

      if (isTouchDevice) {
        document.removeEventListener("touchmove", handleMouseMove, false);
        document.removeEventListener("touchend", handleMouseUp, false);
      }
    };
  }, [drag, handleMouseMove, props]);

  useEffect(() => {
    if (canvasRef.current === null) return;
    const context = canvasRef.current.getContext("2d");
    if (context === null) return;

    draw_profile_card({
      context: context,
      style: props.style,
      card: props.card,
      crop: crop,
      cropInput: props.crop,
    });
  }, [props.card, props.style, props, crop]);

  return (
    <div>
      <div>Drag {drag ? "on" : "off"}</div>
      <div>
        Image {crop.x} {crop.y}
      </div>
      <canvas
        ref={canvasRef}
        width={props.style.canvas.width}
        height={props.style.canvas.height}
        className="border-solid border-black border-2"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
    </div>
  );
}

Card.defaultProps = {
  crop: {
    scale: 1,
    rotate: 0,
    disableBoundaryChecks: false,
    disableHiDPIScaling: false,
    disableCanvasRotation: true,
  },
};

export default Card;
