import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class AskAndWait extends Block {
  public readonly opcode = Opcode.AskAndWait;

  constructor(
    public question: PetalsValue
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      QUESTION: this.question
    }
  }
}
