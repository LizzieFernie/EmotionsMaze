/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Stage/costumes/1.svg", {
        x: 239.9999999999999,
        y: 178.99435028248595
      }),
      new Costume("2", "./Stage/costumes/2.svg", {
        x: 238.9999999999999,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = 1;
  }
}
