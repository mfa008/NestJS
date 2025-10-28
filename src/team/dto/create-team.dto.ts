import { IsString, Length } from "class-validator"
export class CreateTeamDTO {
    @IsString()
    @Length(2, 30)
    name: string;

    @IsString()
    @Length(2,30)
    country : string;
}