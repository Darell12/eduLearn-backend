import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Comment extends Document {
  @Prop({ required: true })
  content: string; // Contenido del comentario

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string; // ID del usuario que hizo el comentario

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  courseId: string; // ID del curso al que se refiere el comentario
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
