import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen p-6 gap-8 bg-[#2f2f2f] text-gray-100">
        {/* Logos */}
        <Image
          src="/logo-rect.png"
          alt="Forest City Contracting"
          width={1054}
          height={339}
          priority
          className="hidden sm:block w-full max-w-3xl"
        />
        <Image
          src="/logo-square.png"
          alt="Forest City Contracting logo"
          width={256}
          height={256}
          priority
          className="sm:hidden w-48"
        />

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#c3d600]">
          Craftsmanship Rooted in Forest City
        </h1>
        <p className="max-w-prose text-lg text-gray-300">
          Forest City Contracting is your local partner for renovations, additions,
          and custom outdoor spaces. From concept to completion, we combine skilled
          workmanship with personalized service.
        </p>
        <p className="max-w-prose text-lg text-gray-300">
          Whether you’re upgrading your home or breaking ground on something new,
          our experienced team is ready to bring your vision to life.
        </p>
        <a
          href="mailto:info@forestcitycontracting.com"
          className="bg-[#c3d600] text-[#11322c] px-8 py-3 rounded-md font-medium hover:bg-[#b0c200]"
        >
          Request a Quote
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-[#11322c] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Building With Integrity</h2>
          <p className="text-lg">
            Based in London, Ontario, we specialize in thoughtful renovations and
            custom builds that enhance the way you live.
          </p>
          <p className="text-lg">
            Our team values clear communication, reliable timelines, and workmanship
            that stands the test of time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-[#1f1f1f] text-gray-100">
        <h2 className="text-3xl font-semibold mb-12 text-center text-[#c3d600]">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-[#2a2a2a] rounded-lg shadow-md">
            <Image
              src="/window.svg"
              alt="Renovations"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Renovations</h3>
            <p className="mt-2 text-gray-300">
              Refresh your home with modern updates and quality craftsmanship.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#2a2a2a] rounded-lg shadow-md">
            <Image
              src="/file.svg"
              alt="Additions"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Additions</h3>
            <p className="mt-2 text-gray-300">
              Expand your living space with seamless additions tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#2a2a2a] rounded-lg shadow-md">
            <Image
              src="/globe.svg"
              alt="Outdoor Living"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold">Outdoor Living</h3>
            <p className="mt-2 text-gray-300">
              Create inviting decks, patios, and landscapes built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center text-center py-16 px-6 bg-[#11322c] text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to build?</h2>
        <p className="max-w-prose mb-6 text-lg">
          Tell us about your project and we’ll get in touch to discuss the details.
        </p>
        <a
          href="mailto:info@forestcitycontracting.com"
          className="bg-[#c3d600] text-[#11322c] px-8 py-3 rounded-md font-medium hover:bg-[#b0c200]"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}

