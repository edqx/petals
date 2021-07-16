import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class ProcedureBooleanArgument extends Reporter {
  public readonly opcode = Opcode.ProcedureBooleanArgument;

  constructor(
    public value: PetalsValue
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      VALUE: this.value
    }
  }
}
