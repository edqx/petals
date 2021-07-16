import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Contains extends Reporter {
  public readonly opcode = Opcode.And;

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
