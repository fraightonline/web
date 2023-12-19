import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fraight - AI driven freight technologies.",
  description:
    "Our Key components of AI-driven freight technologies include predictive analytics for demand forecasting, route optimization, and dynamic pricing. Machine learning algorithms analyze historical data to predict future demand patterns, allowing companies to optimize inventory levels and allocate resources more effectively. Route optimization algorithms consider various factors such as traffic, weather conditions, and fuel efficiency to determine the most efficient and cost-effective transportation routes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
