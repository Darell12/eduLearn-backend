import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string; // Contenido del comentario

  @IsMongoId()
  readonly userId: string; // ID del usuario que hizo el comentario (MongoDB ID)

  @IsMongoId()
  readonly courseId: string; // ID del curso al que se refiere el comentario (MongoDB ID)

  // Otros campos que desees incluir, como la fecha del comentario, etc.
}
