import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACID Pro User Guide for windows",
  description:
    "These are music editing tutorials that I created back in 2005 when I used a PC with ACID Pro for music composition. They show numerous tips and techniques for dealing with MIDI, and looping, and fixing tempo drift, etc.",
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
