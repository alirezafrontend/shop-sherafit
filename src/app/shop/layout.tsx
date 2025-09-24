import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "همه محصولات",
  description:
    "خرید و مشاهده ی تنوع محصول همه ی محصولات از برند شرافیت ،بهترین برند لباس ورزشی کشور با قیمت مناسب و ارسال به سراسر کشور",
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
  return <main className="w-full">{children}</main>;
}
