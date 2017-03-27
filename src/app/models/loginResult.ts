import { User } from './user';
export interface LoginResult {
    status: string;
    message: string;
    user?: User;
}