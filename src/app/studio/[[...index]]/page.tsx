import { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

import { Studio } from "@/sanity/components/Studio";

export const dynamic = "force-static";

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  ...studioMetadata,
  robots: "noindex, nofollow",
};

export default function Page() {
  return <Studio />;
}
