import { IsOptional, IsString, Length } from 'class-validator';
export class UpdateTeamDTO {
  @IsString({
    message: "Le nom d l'equipe doit etre une chaine de caractere",
  })
  @Length(2, 30, { message: 'Le nombre de caractere doit etre entre 2 et 30' })
  @IsOptional()
  name: string;

  @IsString({
    message: "Le nom d l'equipe doit etre une chaine de caractere",
  })
  @Length(2, 30, { message: 'Le nombre de caractere doit etre entre 2 et 30' })
  @IsOptional()
  country: string;
}
