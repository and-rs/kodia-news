import Header from "@/components/navigation/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Header />
      <div className="pt-24">{children}</div>
    </main>
  )
}
