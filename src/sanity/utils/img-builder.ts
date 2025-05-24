import { client } from "@/sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(client)

export default function imageUrlFor(source: SanityImageSource) {
  return builder.image(source)
}
