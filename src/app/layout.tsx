import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "yoomi",
  description: "Introductions that save you money.",
  metadataBase: new URL("https://yoomi-05.vercel.app/"),
  openGraph: {
    images: "/meta-img.webp",
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