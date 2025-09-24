import type { Metadata } from "next";
import IRANSansX from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Footer from "@/components/footer/footerNavbar/Footer";
import ReduxProvider from "@/providers/ReduxProvider";

const IRANSans = IRANSansX({
  src: [
    {
      path: "../fonts/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: " شرافیت | برند برتر پوشاک و لوازم ورزشی در ایران",
  description:
    "برند ورزشی شرافیت تولید کننده پوشاک ورزشی با بهترین کیفیت و قیمت به همراه ارسال سریع اینترنتی و مطمئن به سراسر ایران",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="fa" dir="rtl">
      <body className={IRANSans.className}>
        <ReactQueryProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
