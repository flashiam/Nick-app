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
