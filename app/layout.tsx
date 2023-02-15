import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className=" text-black min-h-screen flex flex-col">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
