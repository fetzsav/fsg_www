import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen p-6 gap-4 bg-gradient-to-b ">
        {/* Logos */}
        <Image
          src="/logo-rect.png"
          alt="Forest City Contracting"
          width={700}
          height={225}
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
        <h1 className="text-4xl md:text-5xl font-bold">
          Craftsmanship Rooted in Savannah
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
          className="bg-green-700 text-white px-8 py-3 rounded-md font-medium hover:bg-green-800"
        >
          Request a Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-6 px-6 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold mb-12 text-center">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <Image
              src="/window.svg"
              alt="Renovations"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Renovations</h3>
            <p className="mt-2 text-gray-600">
              Refresh your home with modern updates and quality craftsmanship.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <Image
              src="/file.svg"
              alt="Additions"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Additions</h3>
            <p className="mt-2 text-gray-600">
              Expand your living space with seamless additions tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <Image
              src="/globe.svg"
              alt="Outdoor Living"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Outdoor Living</h3>
            <p className="mt-2 text-gray-600">
              Create inviting decks, patios, and landscapes built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center text-center py-16 px-6 bg-green-700 text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to build?</h2>
        <p className="max-w-prose mb-6 text-lg">
          Tell us about your project and we’ll get in touch to discuss the details.
        </p>
        <a
          href="mailto:info@forestcitycontracting.com"
          className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-100"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}

