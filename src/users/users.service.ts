import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const userToSave = new this.userModel(createUserDto);
    return userToSave.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return this.userModel.findById(id).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.userModel.findById(id);

    if (!existingUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    // Aplica las actualizaciones del DTO al usuario existente
    if (updateUserDto.username) {
      existingUser.username = updateUserDto.username;
    }

    if (updateUserDto.email) {
      existingUser.email = updateUserDto.email;
    }

    // Agrega más campos según tus necesidades

    // Guarda el usuario actualizado en la base de datos
    return await existingUser.save();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
