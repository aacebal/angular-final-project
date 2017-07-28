export class Beer {
  id: string;
  name: string;
  image?: string;
  style?: string;
  brewery?: string;
}

export class Beers {
  ownList: Beer[];
  wishList: Beer[];
  historyList: Beer[];
}
