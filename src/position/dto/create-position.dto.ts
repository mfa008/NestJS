import { isString, length } from "class-validator"
export class CreatePosition {
  @isString()
  @length(2, 30)
  name : string
}