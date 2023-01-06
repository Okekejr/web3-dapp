export interface Coin {
  CoinList: {
    [key: string]: {
      last_price: number;
      maker_fee: string;
      name: string;
      symbol: string;
      taker_fee: number;
    };
  }[];
}
