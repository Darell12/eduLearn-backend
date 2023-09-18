import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  username: string; // El nombre de usuario

  @IsEmail()
  email: string; // La dirección de correo electrónico

  @IsString()
  firstName: string; // El nombre del usuario

  @IsString()
  lastName: string; // El apellido del usuario

  role: string; // El rol del usuario (por ejemplo, "Estudiante" o "Instructor")
  // Otros campos públicos que desees incluir
}
