import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Multiply extends Reporter {
  public readonly opcode = Opcode.Multiply;

  constructor(
    public num1: PetalsValue,
    public num2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      NUM1: this.num1,
      NUM2: this.num2,
    }
  }
}
