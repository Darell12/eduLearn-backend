import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  username: string; // El nombre de usuario
  
  @IsNotEmpty()
  @IsEmail()
  email: string; // La dirección de correo electrónico
  
  @IsNotEmpty()
  @IsString()
  firstName: string; // El nombre del usuario

  @IsNotEmpty()
  @IsString()
  lastName: string; // El apellido del usuario

  @IsNotEmpty()
  role: string; // El rol del usuario (por ejemplo, "Estudiante" o "Instructor")
  // Otros campos públicos que desees incluir
}
