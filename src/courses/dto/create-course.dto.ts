import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string; // Título del curso

  @IsString()
  @IsNotEmpty()
  readonly description: string; // Descripción del curso

  @IsString()
  readonly instructor: string; // Nombre del instructor

  @IsNumber()
  readonly duration: number; // Duración del curso en minutos


  // Otros campos que desees incluir
}
