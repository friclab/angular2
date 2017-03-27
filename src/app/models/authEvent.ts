import { User } from './user';
export interface AuthEvent {
    status: string;
    message: string;
    eventType: string;
    user?: User;
}