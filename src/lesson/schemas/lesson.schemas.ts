import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from 'src/courses/schemas/courses.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema({
  timestamps: true,
})
export class Lesson {
  @Prop()
  readonly title: string;

  @Prop()
  readonly content: string;

  @Prop()
  readonly duration: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  readonly courseId: Course; // ID del curso al que pertenece la lección (MongoDB ID)

  @Prop()
  readonly order: number; // Orden de la lección dentro del curso
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
