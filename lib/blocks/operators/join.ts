import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Join extends Reporter {
  public readonly opcode = Opcode.Join;

  constructor(
    public string1: PetalsValue,
    public string2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      STRING1: this.string1,
      STRING2: this.string2,
    }
  }
}
