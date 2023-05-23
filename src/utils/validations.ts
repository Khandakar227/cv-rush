import { object, ref, string } from "yup";

export const userInfoSchema = object({
  username: string().min(2).max(80).required(),
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string().required('Password confirmation is required').oneOf([ref('password')], 'Confirmation password does not match')
}).required();

export const userSchema = object({
  email: string().email().required(),
  password: string().min(8).required(),
}).required();

export const passwordSchema = object({
  password: string().min(8).required(),
});
