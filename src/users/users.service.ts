import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { UserInterface } from '../users/schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel('users') private readonly userModel: Model<UserInterface>) {}

  async create(createUserInput: CreateUserInput) {
    return await this.userModel.create(createUserInput);
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput);
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
