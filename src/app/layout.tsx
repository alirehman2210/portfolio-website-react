import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Ali Rehman - Product Manager & Strategic Thinker",
  description: "Portfolio of Ali Rehman, an experienced Product Manager specializing in user-centric solutions and data-driven product strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
