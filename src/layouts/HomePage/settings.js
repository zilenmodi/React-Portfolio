import { dotColorLight, dotColorDark } from "../../style.module.css";

export const settings = {
  canvas: {
    canvasFillSpace: true,
    width: 100,
    height: 100,
    useBouncyWalls: false,
  },
  particle: {
    particleCount: 100,
    color: dotColorDark,
    minSize: 2,
    maxSize: 5,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 0,
    minSpeed: null,
  },
  opacity: {
    minOpacity: 0.2,
    maxOpacity: 0.2,
    opacityTransitionTime: 3000,
  },
};
