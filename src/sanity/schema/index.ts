import { articleSchema } from "./article-schema"
import { authorSchema } from "./author-schema"
import { tagSchema } from "./tags-schema"

export const schema = {
  types: [articleSchema, authorSchema, tagSchema],
}
