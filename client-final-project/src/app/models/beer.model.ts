export class Beer {
  id: string;
  name: string;
  image?: string;
}

export class Beers {
  ownnList: Beer[];
  wishList: Beer[];
  historyList: Beer[];
}
