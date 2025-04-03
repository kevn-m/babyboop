import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server"

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const redirectPath = user ? "/chat" : "/sign-in"

  return (
    <>
      <Hero />
      <Button asChild>
        <Link href={redirectPath}>Get started</Link>
      </Button>
    </>
  )
}
