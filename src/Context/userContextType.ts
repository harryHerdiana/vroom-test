export type IUserContext = {
  userData: {
    email: string;
    password: string;
  }[];
  isLogin: boolean;
  isLoading: boolean;
  setLogin: () => void;
  setLogout: () => void;
  toggleLoading: () => void;
};
