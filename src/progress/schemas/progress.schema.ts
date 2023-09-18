import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Progress extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string; // ID del usuario (MongoDB ID)

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  courseId: string; // ID del curso en el que está haciendo progreso (MongoDB ID)

  @Prop({ type: Number, default: 0 })
  completedLessons: number; // Número de lecciones completadas por el usuario (inicializado en 0)

  @Prop({ type: Number, default: 0 })
  totalLessons: number; // Número total de lecciones en el curso (inicializado en 0)

  // Otros campos que desees incluir, como el progreso del módulo, la fecha de inicio, etc.
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);
