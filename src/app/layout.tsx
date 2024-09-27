import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "yoomi",
  description: "Introductions that save you money.",
  // metadataBase: new URL("/"),
  openGraph: {
    images: "/meta-img",
  },
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}