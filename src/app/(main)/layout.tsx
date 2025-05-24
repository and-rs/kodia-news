import Header from "@/components/navigation/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Header />
      <div className="flex justify-center py-38 sm:py-30">
        <div className="max-w-3xl">{children}</div>
      </div>
    </main>
  )
}
