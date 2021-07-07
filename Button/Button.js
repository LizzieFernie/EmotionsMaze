/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("b1", "./Button/costumes/b1.svg", {
        x: 239.9999999999999,
        y: 180.49999999999997
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.stage.costume = 1;
    this.broadcast("instrWindow");
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.broadcast("startGame");
  }
}
