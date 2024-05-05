"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";

type SocketProviderProps = {
  children: React.ReactNode;
};

type TSocketContext = {
  sendMessage: (message: string) => void;
  messages: string[];
};

const SocketContext = createContext<TSocketContext | null>(null);

const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const onMessageReceived = useCallback((msg: string) => {
    console.log("from server received message", msg);
    const { message } = JSON.parse(msg) as { message: string };

    setMessages((prevMsg) => [...prevMsg, message]);
  }, []);

  useEffect(() => {
    const _socket = io("http://localhost:8000"); // socket server domain
    setSocket(_socket);
    _socket.on("redis:message", onMessageReceived);

    return () => {
      _socket.disconnect();
      _socket.off("redis:message", onMessageReceived);
      setSocket(null);
    };
  }, []);

  const sendMessage: TSocketContext["sendMessage"] = useCallback(
    (message: string) => {
      if (socket) {
        socket.emit("event:message", { message });
      }
    },
    [socket]
  );

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error("SocketContext is not available");
  return { state };
};

export default SocketProvider;
