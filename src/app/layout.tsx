import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XY3EG348BP"
        async
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XY3EG348BP');
            `,
        }}
      />
      <body
        id="layout-default"
        className="layout-default antialiased"
        data-focus-method="key"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
