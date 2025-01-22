import { createContext } from "react";

export interface UserDetails {
  name: string;
  email: string;
  picture: string;
  uid?: string;
}

interface UserDetailsContextProps {
  userDetails: UserDetails;
  setUserDetails: (userDetails: UserDetails) => void;
}

export const UserDetailsContext = createContext<UserDetailsContextProps>(
  {} as UserDetailsContextProps
);
