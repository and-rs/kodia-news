import { createClient } from "next-sanity";

import {
  dataset,
  projectId,
  previewToken as token,
  revalidateSecret,
} from "./environment";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2022-11-15",
  useCdn: !revalidateSecret,
  perspective: "published",
  token,
});
