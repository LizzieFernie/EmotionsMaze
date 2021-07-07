import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Glasses from "./Glasses/Glasses.js";
import Button from "./Button/Button.js";
import Button2 from "./Button2/Button2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Glasses: new Glasses({
    x: -207,
    y: -150,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 1
  }),
  Button: new Button({
    x: 4,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: 119,
    y: -129,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
