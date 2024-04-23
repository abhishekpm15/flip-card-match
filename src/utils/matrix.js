import Angular from "../assets/angular.png";
import AWS from "../assets/aws.png";
import Docker from "../assets/docker.png";
import Nextjs from "../assets/nextjs.png";
import Bun from "../assets/bun.png";
import Python from "../assets/python.png";
import Raspberry from "../assets/raspberry.png";
import ReactPng from "../assets/react.png";
import { randomAssign } from "./random";

const array = randomAssign();

const imageMap = {
  1: Angular,
  2: AWS,
  3: Docker,
  4: Nextjs,
  5: Bun,
  6: Python,
  7: Raspberry,
  8: ReactPng,
  9: Angular,
  10: AWS,
  11: Docker,
  12: Nextjs,
  13: Bun,
  14: Python,
  15: Raspberry,
  16: ReactPng,
};

console.log(array);

export const matrix = [
  [
    {
      show: true,
      img: imageMap[array[0]],
    },
    {
      show: true,
      img: imageMap[array[1]],
    },
    {
      show: true,
      img: imageMap[array[2]],
    },
    {
      show: true,
      img: imageMap[array[3]],
    },
  ],
  [
    {
      show: true,
      img: imageMap[array[4]],
    },
    {
      show: true,
      img: imageMap[array[5]],
    },
    {
      show: true,
      img: imageMap[array[6]],
    },
    {
      show: true,
      img: imageMap[array[7]],
    },
  ],
  [
    {
      show: true,
      img: imageMap[array[8]],
    },
    {
      show: true,
      img: imageMap[array[9]],
    },
    {
      show: true,
      img: imageMap[array[10]],
    },
    {
      show: true,
      img: imageMap[array[11]],
    },
  ],
  [
    {
      show: true,
      img: imageMap[array[12]],
    },
    {
      show: true,
      img: imageMap[array[13]],
    },
    {
      show: true,
      img: imageMap[array[14]],
    },
    {
      show: true,
      img: imageMap[array[15]],
    },
  ],
];
