import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string; // Título del módulo

  @IsString()
  readonly description: string; // Descripción del módulo

  @IsNumber()
  readonly order: number; // Orden del módulo dentro del curso

  @IsMongoId()
  readonly courseId: string; // ID del curso al que pertenece el módulo (MongoDB ID)

  // Otros campos que desees incluir
}
