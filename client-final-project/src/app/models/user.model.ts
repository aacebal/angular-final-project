import { Beers } from '../models/beer.model'
import { Friend } from '../model/fried.model'

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
