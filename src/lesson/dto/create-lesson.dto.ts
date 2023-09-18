import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string; // Título de la lección

  @IsString()
  readonly content: string; // Contenido de la lección (puede ser texto, HTML, etc.)

  @IsNumber()
  readonly duration: number; // Duración de la lección en minutos

    
  @IsMongoId()
  readonly courseId: string; // ID del curso al que pertenece la lección (MongoDB ID)

  @IsNumber()
  readonly order: number; // Orden de la lección dentro del curso
  // Otros campos que desees incluir, como recursos adicionales, enlaces, etc.
}
