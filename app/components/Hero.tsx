import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative flex items-center justify-center min-h-[70vh] text-white text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
        alt="Jardin luxuriant avec allée verdoyante"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-green-800/60" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl p-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow mb-6">
          Les Jardins d'Adrien
        </h1>
        <p className="text-xl mb-8">
          Paysagisme, création et entretien de jardins en toute confiance.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
