"use client"
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>
          Landing Page
        </title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
