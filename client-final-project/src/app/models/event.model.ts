import { Friend } from './friend.model';
import { Beer } from './beer.model';
import { Notification } from './notification.model';

export class Event {
    name: string;
    location: string;
    date: Date;
    place: Object;
    beers: Beer[];
    wishList: Beer[];
    guests: Friend[];
}
