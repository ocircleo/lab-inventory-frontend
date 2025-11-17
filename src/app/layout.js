import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./css/alert.css";
import "./css/scroll.css";
import ThemeCompo from "./components/theme/ThemeCompo";
import AuthProvider from "./state/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Bangladesh Counsel for Career Excellence",
    default: "Bangladesh Counsel for Career Excellence",
  },
  description:
    "Boost your career with expert-led courses tailored for success in Bangladesh. Discover skills that employers value, advance professionally, and unlock new opportunities with our career development programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
        <ThemeCompo></ThemeCompo>
        <div
          id="alert-container"
          className={`fixed bottom-1 left-0 xs:left-1 w-4/5 xs:w-full  flex flex-col justify-start gap-2 pointer-events-none `}
        ></div>
        <div
          id="popup-container"
          className={`fixed w-4/5 xs:w-full  flex flex-col justify-center items-center gap-2 pointer-events-none `}
        ></div>
      </body>
    </html>
  );
}
