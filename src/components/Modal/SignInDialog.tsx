import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lookup } from "@/data/Lookup";
import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useContext } from "react";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { v4 as uuidv4 } from "uuid";

const SignInDialog = ({
  openDialog,
  onOpenChange,
}: {
  openDialog: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { setUserDetails } = useContext(UserDetailsContext);

  const CreteUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo);
      const user = userInfo.data;
      await CreteUser({
        name: user.name,
        email: user.email,
        picture: user.picture,
        uid: uuidv4(),
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(userInfo.data));
      }

      setUserDetails({
        name: userInfo.data.name,
        email: userInfo.data.email,
        picture: userInfo.data.picture,
        
      });
      onOpenChange(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="font-bold text-2xl text-white">
            {Lookup.SIGNIN_HEADING}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-gray-300 text-center">
          {Lookup.SIGNIN_SUBHEADING}
        </DialogDescription>

        <div className="flex justify-center mt-3 ">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-400"
            onClick={() => googleLogin()}
          >
            Sign In With Google
          </Button>
        </div>
        <div className="text-center text-gray-300 mt-3 text-sm">
          <p>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
