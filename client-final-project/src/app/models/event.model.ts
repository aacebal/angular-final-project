import { Friend } from './friend.model';
import { Beer } from './beer.model';
import { Notification } from './notification.model';

export class Event {
    name: string;
    organizer: string;
    address: Object;
    date: Date;
    beers?: Beer[];
    guests?: Friend[];
}

export class Events {
    organized: string[];
    invited: string[];
}
