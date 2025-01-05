import { createContext, Dispatch, SetStateAction } from "react";

interface QRType {
  qrData: string;
}

export const Context = createContext<QRType>({
  qrData: "",
});

interface QRTypeFn {
  setQrData: Dispatch<SetStateAction<string>>;
}

export const ContextFn = createContext<QRTypeFn>({
  setQrData: () => null,
});
