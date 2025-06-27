import { createContext } from "react";

export type UserType = {
  user: any;
  setUser: (user: any) => void;
};

export const UserContext = createContext<UserType>({
  user: null,
  setUser: () => {},
});
