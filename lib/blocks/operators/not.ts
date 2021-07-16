import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class Not extends Reporter {
  public readonly opcode = Opcode.Not;

  constructor(
    public operand: PetalsValue
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERAND: this.operand,
    }
  }
}
