"use client";

import { useRef, useState } from "react";
import { useQrFn } from "@/context/qr";
import QR from "@/lib/qr";
import Input from "@/components/input";
import Button from "@/components/button";

const InputWrapper = () => {
  const { setQrData } = useQrFn();
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const generateQRCode = async () => {
    try {
      const value = String(inputRef.current!.value).trim();
      if (!value) {
        setError("Please enter a valid value to generate QR code");
        return;
      }
      const qrCodeUrl = await QR.generate(value);
      setQrData(qrCodeUrl);
      setError("");
    } catch (err) {
      console.error("Error generating QR code:", err);
    }
  };

  return (
    <div className="d-flex row">
      <div className="col-12 col-md-8">
        <Input
          type="text"
          placeholder="Enter text to generate QR code"
          ref={inputRef}
        />
      </div>
      <div className="col-12 col-md-4">
        <Button
          label="Generate QR"
          style={{ marginTop: "6px" }}
          onClick={generateQRCode}
        />
      </div>

      {error && (
        <span className="text-light col-12">
          <span className="text-warning">* </span>
          {error}
        </span>
      )}
    </div>
  );
};

export default InputWrapper;
