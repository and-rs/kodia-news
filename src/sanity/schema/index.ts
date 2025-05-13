import { articleSchema } from "./article-schema";
import { authorSchema } from "./author-schema";

export const schema = {
  types: [articleSchema, authorSchema],
};
