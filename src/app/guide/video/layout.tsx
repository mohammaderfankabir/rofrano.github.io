import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEGAS Pro User Guide for windows",
  description:
    "These are video editing tutorials I created between 2005 - 2012 when I used a Windows PC with Sony VEGAS Pro software for video editing. They show numerous tips and techniques for achieving various special effects.",
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
