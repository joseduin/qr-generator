import styles from "./page.module.css";
import QRWrapper from "@/features/qr/ui/qr";
import InputWrapper from "@/features/qr/ui/input";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-light text-center">QR Code Generator</h1>
        <InputWrapper />
        <QRWrapper />
      </main>
    </div>
  );
}
