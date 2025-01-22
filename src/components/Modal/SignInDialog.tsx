import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lookup } from "@/data/Lookup";
import { Button } from "@/components/ui/button";

const SignInDialog = ({
  openDialog,
  onOpenChange,
}: {
  openDialog: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
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
          <Button className="bg-blue-500 text-white hover:bg-blue-400">
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
