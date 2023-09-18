import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema({
  timestamps: true,
})
export class Course {
  @Prop()
  readonly title: string;

  @Prop()
  readonly description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  readonly instructor: User;

  @Prop()
  readonly duration: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
