import { IUser } from '../interfaces/user.interface';

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findOne(id: string): Promise<IUser | null>;
  update(id: string, user: IUser): Promise<IUser | null>;
  remove(id: string): Promise<IUser | null>;
}
