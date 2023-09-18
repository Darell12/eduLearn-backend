import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string; // El ID del usuario

  @Prop()
  username: string; // El nombre de usuario

  @Prop()
  email: string; // La dirección de correo electrónico

  @Prop()
  firstName: string; // El nombre del usuario

  @Prop()
  lastName: string; // El apellido del usuario

  @Prop()
  role: string; // El rol del usuario (por ejemplo, "Estudiante" o "Instructor")
  // Otros campos públicos que desees incluir
}

export const UserSchema = SchemaFactory.createForClass(User);
