export type User = {
  email: string;
  password: string;
  [key: string]: any;
};

export type UserInfo = User & {
  username: string;
  verified: boolean;
}

export interface ClientDataProps {
  about: string[];
  city: string[];
  country: string[];
  date_of_birth: string[];
  display_picture: string[];
  education: string[];
  email: string[];
  phone: string[];
  profession: string[];
  skills: string[];
  username: string[];
  experience: string[];
  [key: string]: any;
}
