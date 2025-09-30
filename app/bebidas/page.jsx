import Image from "next/image"
import Link from "next/link"

export default function Bebidas() {
  return (
    <div className="bg-sky-600 flex flex-col items-center gap-6 p-4 min-h-screen">
      <Link
        href="/"
        className="self-start bg-white hover:bg-gray-100 text-sky-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
      >
        ← Volver
      </Link>

      <div className="w-full max-w-[600px]">
        <Image
          src="/assets/menu 2.jpg"
          alt="Menú de Bebidas"
          width={800}
          height={2000}
          className="rounded-lg w-full h-auto shadow-xl"
        />
      </div>
    </div>
  )
}
