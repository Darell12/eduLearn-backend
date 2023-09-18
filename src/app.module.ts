import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { LessonModule } from './lesson/lesson.module';
import { CommentModule } from './comment/comment.module';
import { ModuleModule } from './module/module.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Darell:Darell@cluster0.cllomgd.mongodb.net/edulearn?retryWrites=true&w=majority',
    ),
    CoursesModule,
    LessonModule,
    CommentModule,
    ModuleModule,
    ProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
