import { Meme } from './Meme';
export interface User {
  $id?: string;
  uname?: string;
  password?: string;
  email?: string;
  profilePic?: string;
  memes?: Meme[];
  bio?: string;
}
