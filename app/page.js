import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-400 flex flex-col items-center gap-6 p-4">
      <div className="w-full max-w-[600px]">
        <Image
          src="/assets/menu web-01.png"
          alt="Menu page 1"
          width={800}
          height={2000}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="w-full max-w-[600px]">
        <Image
          src="/assets/menu web-02.png"
          alt="Menu page 2"
          width={800}
          height={2000}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
