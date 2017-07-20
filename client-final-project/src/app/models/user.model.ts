import { Beers } from '../models/beer.model'

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    password: string;
    beers: Beers;
}
