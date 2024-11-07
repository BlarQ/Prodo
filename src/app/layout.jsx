import localFont from "next/font/local";
import "./globals.css";
import MenuBar from "./dashboard/components/MenuBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Prodo",
  description: "Seemless Task Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-[17%_83%]`}
      >
        <div>
          <MenuBar />
        </div>
        {children}
      </body>
    </html>
  );
}
