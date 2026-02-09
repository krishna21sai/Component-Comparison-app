import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "UI Component Compare",
  description: "Compare UI libraries side by side",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <main style={{
              flex: 1,
              marginLeft: "280px",
              padding: "2rem",
              height: "100vh",
              overflowY: "auto",
              scrollBehavior: "smooth"
            }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
