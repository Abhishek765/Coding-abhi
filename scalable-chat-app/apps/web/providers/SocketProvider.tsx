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
};

const SocketContext = createContext<TSocketContext | null>(null);

const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io("http://localhost:8000"); // socket server domain
    setSocket(socket);

    return () => {
      socket.disconnect();
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
    <SocketContext.Provider value={{ sendMessage }}>
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
