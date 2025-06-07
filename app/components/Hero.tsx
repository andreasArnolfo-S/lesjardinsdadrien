import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white px-8 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Les Jardins d'Adrien
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Un coin de paradis où la nature s'épanouit.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
        >
          Découvrir
        </Link>
      </div>
    </section>
  );
}
