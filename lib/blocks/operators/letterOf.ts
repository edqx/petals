import { Opcode, PetalsValue } from "../../types";
import { Inputs } from "../block";
import { Reporter } from "../reporter";

export class LetterOf extends Reporter {
  public readonly opcode = Opcode.LetterOf;

  constructor(
    public letter: PetalsValue,
    public string: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      LETTER: this.letter,
      STRING: this.string,
    }
  }
}
