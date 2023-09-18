import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateProgressDto {
  @IsMongoId()
  readonly userId: string; // ID del usuario (MongoDB ID)

  @IsMongoId()
  readonly courseId: string; // ID del curso en el que está haciendo progreso (MongoDB ID)

  @IsNumber()
  readonly completedLessons: number; // Número de lecciones completadas por el usuario

  @IsNumber()
  readonly totalLessons: number; // Número total de lecciones en el curso

  // Otros campos que desees incluir, como el progreso del módulo, la fecha de inicio, etc.
}
