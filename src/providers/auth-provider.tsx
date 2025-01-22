"use client";
import { UserDetails, UserDetailsContext } from "@/context/UserDetailsContext";
import { useEffect, useState } from "react";
import { useConvex } from "convex/react";
import { api } from "../../convex/_generated/api";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userDetail, setUserDetail] = useState<UserDetails | null>(null);

  const setUserDetails = (userDetails: UserDetails) => {
    setUserDetail(userDetails);
  };

  useEffect(() => {
    IsAuthenticated();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convex = useConvex();

  const IsAuthenticated = async () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user")!);

      if (user) {
        const result = await convex.query(api.users.GetUser, {
          email: user?.email,
        });
        setUserDetails(result);
        console.log("user result: ", result);
      }
    }
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
