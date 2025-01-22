"use client";
import { UserDetails, UserDetailsContext } from "@/context/UserDetailsContext";
import { useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userDetail, setUserDetail] = useState<UserDetails | null>(null);

  const setUserDetails = (userDetails: UserDetails) => {
    setUserDetail(userDetails);
  };

  return (
    <UserDetailsContext.Provider
      value={{ userDetails: userDetail!, setUserDetails }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default AuthProvider;
