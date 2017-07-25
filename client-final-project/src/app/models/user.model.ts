import { Friend } from './friend.model';
import { Beers } from './beer.model';
import { Notification } from './notification.model';

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    password: string;
    image: string;
    beers: Beers;
    notifications: Notification[];
    friends: Friend[];
}
