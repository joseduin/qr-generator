"use client";

import React, { useState } from "react";
// context
import { Context, ContextFn } from "./index.type";

export function QrProvider({ children }: { children: React.ReactNode }) {
  const [qrData, setQrData] = useState<string>("");

  return (
    <Context.Provider value={{ qrData }}>
      <ContextFn.Provider value={{ setQrData }}>{children}</ContextFn.Provider>
    </Context.Provider>
  );
}

export function useQr() {
  const context = React.useContext(Context);
  if (context === undefined)
    throw new Error("useQr must be used within a Context");
  return context;
}

export function useQrFn() {
  const context = React.useContext(ContextFn);
  if (context === undefined)
    throw new Error("useQrFn must be used within a ContextFn");
  return context;
}
