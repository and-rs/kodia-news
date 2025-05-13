import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "../client";

const builder = createImageUrlBuilder(client);

export const getImageUrl = (source: SanityImageSource) => {
  return builder.image(source).auto("format").fit("max").url();
};
