import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-600 flex flex-col items-center justify-center gap-8 p-4">
      {/* Logo */}
      <div className="w-full max-w-md">
        <Image
          src="/assets/logo.png"
          alt="Restaurant Logo"
          width={400}
          height={120}
          className="w-full h-auto"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Link
          href="/alimentos"
          className="bg-white hover:bg-gray-100 transition-colors rounded-lg shadow-lg overflow-hidden group"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-sky-600 group-hover:text-sky-700">Menú Alimentos</h2>
          </div>
        </Link>

        <Link
          href="/bebidas"
          className="bg-white hover:bg-gray-100 transition-colors rounded-lg shadow-lg overflow-hidden group"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-sky-600 group-hover:text-sky-700">Menú Bebidas</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
