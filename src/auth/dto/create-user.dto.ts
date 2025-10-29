import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from "class-validator";
export class CreateUserDTO {   
    @IsString({message: "Le prenom doit etre une chaine de caractere "})
    @IsNotEmpty({message: "Le prenom ne doit pas etre vide "})
    @Length(2,30,{message: "Le prenom doit etre comprit entre 2 et 30 caracteres. "})
    firstName : string; 

    @IsString({message: "Le nom doit etre une chaine de caractere "})
    @IsNotEmpty({message: "Le nom ne doit pas etre vide "})
    @Length(2,30,{message: "Le nom doit etre comprit entre 2 et 30 caracteres. "})
    lastName : string;

    @IsString({message: "Le mail doit etre une chaine de caractere "})
    @IsNotEmpty({message: "Le mail ne doit pas etre vide "})
    @Length(2,30,{message: "Le mail doit etre comprit entre 2 et 30 caracteres. "})
    @IsEmail()
    email : string; 

    @IsNotEmpty({message: "Le mot de passe ne doit pas etre vide "})
    @MinLength(6, {message: "Le mot de passe ddoit avoir plus de 6 caracteres"})
    password : string;
}