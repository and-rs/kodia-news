import { client } from "@/sanity/client";
import { HomepageQueryResult } from "@/sanity/types";
import { Metadata } from "next";
import { defineQuery } from "next-sanity";

const HomepageQuery = defineQuery(`*[_type == "article"]`);

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News",
};

export default async function Home() {
  const _ = await client.fetch<HomepageQueryResult>(HomepageQuery);

  return (
    <main className="flex justify-center items-center">
      Clean slate
    </main>
  );
}
