import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WagmiProviders from "@/components/providers/wagmi-providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SolanaProvider from "@/components/providers/solana-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PanoramaPace",
  description: "PanoramaPace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <WagmiProviders> */}
        <SolanaProvider>
          <Navbar />
          {children}
          <Footer />
        </SolanaProvider>
        {/* </WagmiProviders> */}
      </body>
    </html>
  );
}
