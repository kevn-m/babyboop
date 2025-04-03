import NextLogo from "./next-logo"
import SupabaseLogo from "./supabase-logo"

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">Babyboop</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Personalised pregnancy support{" "}
      </p>
    </div>
  )
}
