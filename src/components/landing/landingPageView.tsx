"use client";
import Lookup from "@/data/Lookup";
import React, { useContext, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Link } from "lucide-react";
import Colors from "@/data/Colors";
import { MessagesContext } from "@/context/MessagesContext";

const LandingPageView = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const { messages, setMessages } = useContext(MessagesContext);

  const onGenerate = (input: string) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        message: input,
      },
    ]);
  };

  return (
    <div className="flex flex-col items-center mt-56 xl:mt-52 gap-2 ">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 font-medium">{Lookup.HERO_DESC}</p>

      <div
        className="p-5 border rounded-xl max-w-xl w-full mt-3 "
        style={{ backgroundColor: Colors.BACKGROUND }}
      >
        <div className="flex gap-3">
          <Textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none border-none focus-visible:ring-0"
          />
          {userPrompt && (
            <ArrowRight
              className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer transition duration-700 ease-in-out"
              onClick={() => onGenerate(userPrompt)}
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>

      <div className="flex mt-5 flex-wrap max-w-2xl justify-center gap-3">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            onClick={() => onGenerate(suggestion)}
            key={index}
            className="p-2 text-xs border rounded-full text-gray-400 hover:text-white cursor-pointer"
          >
            {suggestion}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default LandingPageView;
