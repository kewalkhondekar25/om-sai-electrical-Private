import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Sai Electrical",
  description: "Om Sai Electrical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
