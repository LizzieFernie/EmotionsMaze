/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glasses extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "sunglass-removebg-preview (2)",
        "./Glasses/costumes/sunglass-removebg-preview (2).svg",
        { x: 116, y: 110.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameWindow" },
        this.whenIReceiveGamewindow
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveGamewindow() {
    this.visible = true;
    this.goto(-207, -150);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
