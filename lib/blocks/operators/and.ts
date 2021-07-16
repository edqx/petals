import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class And extends Reporter {
  public readonly opcode = Opcode.And;

  constructor(
    public operand1: PetalsValue,
    public operand2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERAND1: this.operand1,
      OPERAND2: this.operand2,
    }
  }
}
