import { Opcode, PetalsValue } from "../../types";
import { Reporter } from "../reporter";

export enum TouchingObjectOption {
  MousePointer = "_mouse_",
  Edge = "_edge_"
}

export class TouchingObject extends Reporter {
  public readonly opcode = Opcode.TouchingObject;

  constructor(
    public readonly touchingObjectMenu: TouchingObjectOption | PetalsValue
  ) {
    super();
  }

  get inputs() {
    return {
      TOUCHINGOBJECTMENU: this.touchingObjectMenu
    }
  }
}
