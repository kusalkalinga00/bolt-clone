import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { colors } from "@/data/Colors";

const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Image src="/header/logo.webp" alt="logo" width={40} height={40} />

      <div className="gap-1">
        <Button variant={"ghost"}>Sign In</Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: colors.BACKGROUND,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
