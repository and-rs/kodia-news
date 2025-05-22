import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
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

const fontMono = JetBrains_Mono({
  weight: "variable",
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
