import { Sora } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloggy - Read. Write. Share.",
  description: "Read. Write. Share.",
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sora?.className} antialiased bg-gradient-to-b from-[#050611] to-[#04000c] text-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
