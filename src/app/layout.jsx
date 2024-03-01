import { Inter } from "next/font/google";
import "./globals.css";
import { App } from  '@/app'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barış Sönmez - Full Stack Web & Mobile Developer",
  description: "Barış Sönmez Kişisel Web Sayfası. Yazılım ve Tasarım İçin Profesyonel Çözümler...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`dark:bg-gray-900 dark:text-white duration-200"`}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
