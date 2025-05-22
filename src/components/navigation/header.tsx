import { ThemeSwitch } from "../theme-switch"

export default function Header() {
  return (
    <nav className="flex fixed z-50 flex-col gap-4 justify-center items-center p-4 w-full border-b md:flex-row md:justify-between md:p-6 bg-background">
      <h2>Kodia News</h2>
      <ThemeSwitch />
    </nav>
  )
}
