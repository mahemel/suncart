import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const interFont = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.className} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar></Navbar>

        <main className="mx-auto max-w-7xl w-full px-5 pt-10 pb-20">
          {children}
        </main>

        <Footer></Footer>
        <ToastContainer />

      </body>
    </html>
  );
}
