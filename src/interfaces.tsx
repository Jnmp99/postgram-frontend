export interface postsIF {
  id: string;
  user: string;
  userName: string;
  userUrl: string;
  profile: string | undefined;
  post: string | undefined;
  likes: number;
  shares: number;
  replies: number;
  postedAt: string;
  postedTime: string;
  img: string | undefined;
}

export interface userIF {
  id: string;
  name: string;
  username: string;
  profilepic: string | undefined;
  coverImg: string | undefined;
  description: string | undefined;
  followers: number;
  followings: number;
}

export interface userDataIF {
  value: userIF;
}

export interface reduxCookiesIF {
  session_id: string;
}
export interface reduxCookieIF {
  value: reduxCookiesIF;
}

export interface reduxAccessTokenIF {
  value: string;
}

export interface contentContainerWidthIF {
  value: number;
}

export interface reduxIF {
  cookie: reduxCookieIF;
  accessToken: reduxAccessTokenIF;
  userData: userDataIF;
  contentContainerWidth: contentContainerWidthIF;
}

export interface signupModalReducerStateIF {
  error: boolean;
  message: string | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
}

export interface signupModalReducerActionIF {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
}

export interface fillViewBoxIconPropsIF {
  fill: string | undefined;
  viewBox: string | undefined;
}
