import { IUserRepository } from './user.repository.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { IUser } from '../interfaces/user.interface';

export class UserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: IUser): Promise<IUser> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<IUser | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async remove(id: string): Promise<IUser | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
