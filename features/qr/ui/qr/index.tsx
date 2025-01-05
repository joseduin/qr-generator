"use client";

import Button from "@/components/button";
import { useQr } from "@/context/qr";
import QR from "@/lib/qr";

const QRWrapper = () => {
  const { qrData } = useQr();

  const downloadQRCode = () => {
    QR.download(qrData!);
  };

  return (
    qrData && (
      <div className="p-4 d-flex flex-column align-items-center">
        <img src={qrData} alt="Generated QR Code" />
        <div>
        <Button
          secondary
          label="Download QR"
          className="col-12 mt-2"
          onClick={downloadQRCode}
        />
        </div>
      </div>
    )
  );
};

export default QRWrapper;
