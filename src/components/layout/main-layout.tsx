import Link from 'next/link'
import { Button } from "@/components/ui/button"
import LogoutButton from "@/components/logout-button"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Construpay
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/pagar">Cuentas por pagar</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/users">Usuarios</Link>
            </Button>
            <LogoutButton />
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 text-center">
          © 2024 Construpay. All rights reserved.
        </div>
      </footer>
    </div>
  )
}