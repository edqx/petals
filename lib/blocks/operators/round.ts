import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Round extends Reporter {
  public readonly opcode = Opcode.Round;

  constructor(
    public num: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      NUM: this.num,
    }
  }
}
