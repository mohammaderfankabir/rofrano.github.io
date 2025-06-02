import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/context";
import { BASE_URL, gaId, author } from "@/constants";
import "./globals.css";

const description = "John Rofrano’s tutorials, blogs, and ideas.";

export const metadata: Metadata = {
  title: {
    default: author,
    template: `%s – ${author}`,
  },
  description,
  authors: [{ name: author }],
  referrer: "strict-origin-when-cross-origin",
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  generator: "Next.js",
  metadataBase: new URL(BASE_URL),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="beforeInteractive"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
