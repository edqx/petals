import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export enum MathOperationOption {
  Abs = "abs",
  Floor = "floor",
  Ceiling = "ceiling",
  Sqrt = "sqrt",
  Sin = "sin",
  Cos = "cos",
  Tan = "tan",
  Asin = "asin",
  Acos = "acos",
  Atan = "atan",
  Ln = "ln",
  Log = "log",
  PowerE = "e ^",
  Power10 = "10 ^",
}

export class MathOperation extends Reporter {
  public readonly opcode = Opcode.LetterOf;

  constructor(
    public operator: MathOperationOption,
    public num: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERATOR: this.operator,
      NUM: this.num,
    }
  }
}
