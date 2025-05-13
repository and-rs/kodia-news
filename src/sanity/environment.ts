import { assertValue } from "@/utils/assert-value";

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID is not set"
);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET is not set"
);

export const previewToken = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN,
  "NEXT_PUBLIC_SANITY_PREVIEW_TOKEN is not set"
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-5-17";

export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;
