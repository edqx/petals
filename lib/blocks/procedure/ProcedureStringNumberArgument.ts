import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class ProcedureStringNumberArgument extends Reporter {
  public readonly opcode = Opcode.ProcedureStringNumberArgument;

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
