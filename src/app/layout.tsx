import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { DM_Sans, Fragment_Mono } from "next/font/google"
import Head from "next/head"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Technical test using Sanity CMS and Next.js",
}

const fontSans = DM_Sans({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-sans",
})

const fontMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSans.variable, fontMono.variable)}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <ThemeProvider
          disableTransitionOnChange
          defaultTheme="system"
          attribute="class"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
