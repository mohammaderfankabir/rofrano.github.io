import Script from "next/script";
import Image from "next/image";
import { BASE_URL, ICONS } from "@/constants";
import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: null,
    streetAddress: null,
  },
  email: "mailto:rofrano@cs.nyu.edu",
  image: `${BASE_URL}/john-rofrano-uhd.avif`,
  jobTitle: "Senior Technical Staff Member | DevOps Champion",
  worksFor: [
    {
      "@type": "Organization",
      name: "IBM T.J. Watson Research Center",
    },
    {
      "@type": "Organization",
      name: "New York University",
      roleName: "Adjunct Faculty",
    },
  ],
  name: "John Rofrano",
  telephone: null,
  url: BASE_URL,
};

const SiteMetaData = {
  title: "John Rofrano",
  description: "Tutorials, blogs, and ideas by John Rofrano.",
  authors: "John Rofrano",
  keywords: null,
  url: "/",
  publishedTime: "2012-12-10T00:00:000Z",
  modifiedTime: "2025-03-19T17:54:40.891Z",
  openGraphImageUrl: "/opengraph.png",
  openGraphImageAlt: "John Rofrano – DevOps Champion, Musician, and Educator",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: SiteMetaData.title,
  description: SiteMetaData.description,
  authors: [{ name: SiteMetaData.authors }],
  keywords: null,
  robots: "index, follow",
  alternates: {
    canonical: SiteMetaData.url,
  },
  openGraph: {
    title: SiteMetaData.title,
    description: SiteMetaData.description,
    type: "website",
    siteName: "John Rofrano Biography",
    images: [
      {
        url: SiteMetaData.openGraphImageUrl,
        width: 1200,
        height: 630,
        alt: SiteMetaData.openGraphImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteMetaData.title,
    description: SiteMetaData.description,
    creator: `@John Rofrano`,
    images: {
      url: SiteMetaData.openGraphImageUrl,
      alt: SiteMetaData.openGraphImageAlt,
    },
  },
  icons: {
    icon: ICONS.icon,
    apple: ICONS.apple,
  },
};

export default function Homepage() {
  return (
    <>
      <div id="home">
        <main id="page-content" className="page-content"></main>
      </div>
    </>
  );
}
