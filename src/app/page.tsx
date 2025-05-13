import { Metadata } from "next";
import Image from "next/image";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import { HomepageQueryResult } from "@/sanity/types";

import logoKodia from "@/assets/images/logo-kodia.png";

const HomepageQuery = defineQuery(`*[_type == "article"]`);

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News",
};

export default async function Home() {
  const _ = await client.fetch<HomepageQueryResult>(HomepageQuery);

  return (
    <main className="flex justify-center items-center bg-white w-screen h-screen">
      <div className="z-10 space-y-4 w-full max-w-3xl">
        <h1 className="font-bold text-black text-4xl">Kodia News</h1>
        <p className="text-black text-lg">Under construction.</p>
        <hr className="opacity-50 border-black/25" />
        <Image
          src={logoKodia}
          alt="Kodia Logo"
          className="w-auto h-5 object-contain"
        />
      </div>
    </main>
  );
}
