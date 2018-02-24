export interface User {
  $id: string;
  uname: string;
  password: string;
  email: string;
  profile: string;
  profilePic?: string;
  memes?: string[];
  bio?: string;
}
