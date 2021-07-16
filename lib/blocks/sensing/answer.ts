import { Opcode } from "../../types";
import { Reporter } from "../reporter";

export class Answer extends Reporter {
  public readonly opcode = Opcode.Answer;
}
