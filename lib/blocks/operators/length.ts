import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Length extends Reporter {
  public readonly opcode = Opcode.Length;

  constructor(
    public string: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      STRING: this.string,
    }
  }
}
