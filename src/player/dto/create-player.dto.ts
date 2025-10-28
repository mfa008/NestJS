import { IsNumber, IsPositive, IsString, Length } from "class-validator";
export class CreatePlayerDTO {
    @IsString({message : "Le prenom doit etre une chaine de caractere "})
    @Length(2,30,{message : "La longeur du prenom doit etre entre 2 et 30"})
    firstName : string;

    @IsString({message : "Le nom doit etre une chaine de caractere "})
    @Length(2,30,{message : "La longeur nom doit etre entre 2 et 30"})
    lastName : string;

    @IsNumber()
    @IsPositive()
    teamId : number;

    @IsNumber()
    @IsPositive()
    positionId : number; 


}