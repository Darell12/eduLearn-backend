import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Module extends Document {
  @Prop({ required: true })
  title: string; // Título del módulo

  @Prop()
  description: string; // Descripción del módulo

  @Prop({ required: true })
  order: number; // Orden del módulo dentro del curso

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  courseId: string; // ID del curso al que pertenece el módulo (MongoDB ID)

  // Otros campos que desees incluir
}

export const ModuleSchema = SchemaFactory.createForClass(Module);
