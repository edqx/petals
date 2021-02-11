import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SetSize extends Block {
  public readonly opcode = Opcode.SetSizeTo;

  constructor(
    public size: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      SIZE: this.size
    };
  }
}
