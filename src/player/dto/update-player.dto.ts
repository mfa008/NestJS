import { IsString, Length, IsOptional } from 'class-validator';
export class UpdatePlayerDTO {
  @IsString({ message: 'Le prenom doit etre une chaine de caractere ' })
  @Length(2, 30, { message: 'La longeur du prenom doit etre entre 2 et 30' })
  @IsOptional()
  firstName: string;

  @IsString({ message: 'Le nom doit etre une chaine de caractere ' })
  @Length(2, 30, { message: 'La longeur nom doit etre entre 2 et 30' })
  @IsOptional()
  lastName: string;

  @IsOptional()
  TeamId: number;

  @IsOptional()
  positionId: number;
}
