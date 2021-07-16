import { Block } from ".";
import { Opcode } from "../types";
import * as Control from "./control";
import * as Data from "./data";
import * as Looks from "./looks";
import * as Motion from "./motion";
import * as Operators from "./operators";
import * as Procedure from "./procedure";
import * as Sensing from "./sensing";

export abstract class Reporter extends Block {
  static getOpcodes(): { [opcode: Opcode]: Reporter } {
    return {
      /**
       * Control reporter opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}
       */

      control_get_counter: Control.Counter,

      /**
       * Data reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js"}
       */

      data_variable: Data.Variable,
      data_listcontents: Data.List,
      data_itemoflist: Data.ItemOfList,
      data_itemnumoflist: Data.ItemNumberOfList,
      data_lengthoflist: Data.LengthOfList,
      data_listcontainsitem: Data.ListContainsItem,

      /**
       * Looks reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js"}
       */

      looks_size: Looks.Size,
      looks_costumenumbername: Looks.CostumeNumberName,
      looks_backdropnumbername: Looks.BackdropNumberName,

      /**
       * Motion reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js"}
       */

      motion_xposition: Motion.XPosition,
      motion_yposition: Motion.YPosition,
      motion_direction: Motion.Direction,
      motion_xscroll: Motion.XScroll,
      motion_yscroll: Motion.YScroll,

      /**
       * Operator reporter opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}
       */

      operator_add: Operators.Add,
      operator_subtract: Operators.Subtract,
      operator_multiply: Operators.Multiply,
      operator_divide: Operators.Divide,
      operator_lt: Operators.LessThan,
      operator_equals: Operators.Equals,
      operator_gt: Operators.GreaterThan,
      operator_and: Operators.And,
      operator_or: Operators.Or,
      operator_not: Operators.Not,
      operator_random: Operators.Random,
      operator_join: Operators.Join,
      operator_letter_of: Operators.LetterOf,
      operator_length: Operators.Length,
      operator_contains: Operators.Contains,
      operator_mod: Operators.Modulo,
      operator_round: Operators.Round,
      operator_mathop: Operators.MathOperation,

      /**
       * Procedures reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js"}
       */

      argument_reporter_string_number: Procedure.ProcedureStringNumberArgument,
      argument_reporter_boolean: Procedure.ProcedureBooleanArgument,

      /**
       * Sensing reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js"}
       */

      sensing_touchingobject: Sensing.TouchingObject,
      sensing_touchingcolor:
      sensing_coloristouchingcolor:
      sensing_distanceto:
      sensing_timer:
      sensing_of:
      sensing_mousex:
      sensing_mousey:
      sensing_mousedown:
      sensing_keypressed:
      sensing_current:
      sensing_dayssince2000:
      sensing_loudness:
      sensing_loud:
      sensing_answer: Sensing.Answer,
      sensing_username:
      sensing_userid:

      /**
       * Sound reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js"}
       */

      sound_volume:
    }
  }
}
