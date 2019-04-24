import { IBook } from './book.interface';

export interface IUser {
  id?: string;
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: string[];
}
