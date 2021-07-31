export interface TopTen {
  id: number;
  songImg: string;
  singer: string;
  songName: string;
  likes: number;
  trend: number;
  trendPercent: number;
}

export interface Trending {
  id: number;
  songImg: string;
}

export interface Song {
  id: number;
  songImg: string;
  songName: string;
  singerName: string;
  creationDate: string;
  isPromoted: boolean;
  platform: string;
  isChecked: boolean;
}

export interface User {
  name: string;
  email: string;
  type: string;
}

export interface SignInFlow {
  typeOfUser: boolean;
  appSignIn: boolean;
  discordSignIn: boolean;
}

export interface PromotionDetails {
  promoServer: string;
  listenLimit: number;
  points: number;
  selectedSongs: (Song | null)[];
}

export interface Facebook {
  id: string;
  accessToken: string;
  name: string;
  picture: string;
  userId: string;
  loginType: string;
}

export interface Google {
  userId: string;
  accessToken: string;
  name: string;
  picture: string;
  email: string;
  loginType: string;
}
