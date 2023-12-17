"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSocketContext } from "@/providers/SocketProvider";
import { useState } from "react";

const Page = () => {
  const { state } = useSocketContext();
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendClick = () => {
    console.log({ inputMessage });
    state.sendMessage(inputMessage);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {/* Chat Box */}
      <div>All Messages will appear here</div>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Messages"
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button onClick={handleSendClick}>Send</Button>
      </div>
    </div>
  );
};

export default Page;
