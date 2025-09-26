import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src="/mobile-menu.jpg"
          alt="Mobile version"
          width={300}
          height={300}
          className="rounded-lg"
          priority
        />
      </div>

      {/* Desktop image */}
      <div className="hidden md:block">
        <Image
          src="/desktop-menu.jpg"
          alt="Desktop version"
          width={600}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
