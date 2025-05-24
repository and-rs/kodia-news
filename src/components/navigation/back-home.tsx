import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"

export default function BackHome() {
  return (
    <Link href={"/"}>
      <Button variant={"ghost"}>
        <ArrowLeft />
        Go back to home
      </Button>
    </Link>
  )
}
