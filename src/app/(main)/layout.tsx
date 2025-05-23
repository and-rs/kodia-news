import Header from "@/components/navigation/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Header />
      <div className="flex justify-center py-30">{children}</div>
    </main>
  )
}
