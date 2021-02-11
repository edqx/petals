import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { EffectOption } from "./setEffectTo";

export class ChangeEffectBy extends Block {
  public readonly opcode = Opcode.ChangeGraphicEffectBy;

  constructor(
    public effect: EffectOption,
    public change: PetalsValue
  ) {
    super(); 
  }

  get fields(): Fields {
    return {
      EFFECT: this.effect
    };
  }

  get inputs(): Inputs {
    return {
      CHANGE: this.change
    };
  }
}
