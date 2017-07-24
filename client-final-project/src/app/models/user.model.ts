import { Friend } from './friend.model';
import { Beers } from './beer.model';

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    password: string;
    image: string;
    beers: Beers;
    notifications: string[];
    friends: Friend[];
}
