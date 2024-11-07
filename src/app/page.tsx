import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Construpay</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus objetivos de manera más eficiente.
      </p>
      <div className="space-x-4">
        <Button variant="outline" asChild>
          <Link href="/login">Iniciar Sesión</Link>
        </Button>
      </div>
    </div>
  )
}