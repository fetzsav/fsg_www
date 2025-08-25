import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen p-6 gap-8">
      {/* Logos */}
      <Image
        src="/logo-rect.png"
        alt="Forest City Contracting"
        width={512}
        height={164}
        priority
        className="hidden sm:block w-full max-w-md"
      />
      <Image
        src="/logo-square.png"
        alt="Forest City Contracting logo"
        width={200}
        height={200}
        priority
        className="sm:hidden w-40"
      />

      {/* Content */}
      <h1 className="text-3xl md:text-4xl font-bold">
        Craftsmanship Rooted in Forest City
      </h1>
      <p className="max-w-prose text-lg">
        Forest City Contracting is your local partner for renovations, additions,
        and custom outdoor spaces. From concept to completion, we combine skilled
        workmanship with personalized service.
      </p>
      <p className="max-w-prose text-lg">
        Whether you’re upgrading your home or breaking ground on something new,
        our experienced team is ready to bring your vision to life.
      </p>
      <a
        href="mailto:info@forestcitycontracting.com"
        className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
      >
        Request a Quote
      </a>
    </main>
  );
}
