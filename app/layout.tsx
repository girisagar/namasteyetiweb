import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namaste Yeti — Himalayan Indian Kitchen | Momo, Curry & Naan",
  description:
    "Nepali and Indian comfort food for casual dining, quick takeout, easy delivery, and group catering. Momo, curries, naan, chowmein, thukpa and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
