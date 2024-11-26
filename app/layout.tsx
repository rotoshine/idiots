import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "IDIOTS - Official Website",
  description: "Official website of IDIOTS band",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-black text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
