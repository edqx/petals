import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Random extends Reporter {
  public readonly opcode = Opcode.Random;

  constructor(
    public from: PetalsValue,
    public to: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      FROM: this.from,
      TO: this.to,
    }
  }
}
