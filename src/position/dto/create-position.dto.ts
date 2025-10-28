import { IsString, Length } from "class-validator"
export class CreatePosition {

  @IsString()
  @Length(2, 30)
  name : string
}