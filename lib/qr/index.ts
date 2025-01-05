import QRCode from 'qrcode';

class QR  {
    public static async generate(text: string): Promise<string> {
        return QRCode.toDataURL(text);
    }

    public static download(data: string): void {
        const link = document.createElement('a');
        link.href = data;
        link.download = `qrcode_${Date.now()}.png`;
        link.click();
    }
}

export default QR;