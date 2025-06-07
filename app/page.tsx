"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
          alt="Jardin luxuriant"
          fill
          className="object-cover -z-10"
          priority
        />
        <FadeIn className="px-4">
          <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-md">
            Les Jardins d'Adrien
          </h1>
          <p className="mt-4 text-xl sm:text-2xl drop-shadow-sm">
            Paysagiste & jardinier passionné
          </p>
          <a
            href="mailto:contact@lesjardinsdadrien.fr"
            className="mt-8 inline-block bg-white/90 text-emerald-700 px-6 py-3 rounded font-medium hover:bg-white"
          >
            Contactez-moi
          </a>
        </FadeIn>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">À propos</h2>
            <p className="text-lg leading-relaxed text-center">
              Basé en Île-de-France, Adrien met son savoir-faire de paysagiste au service
              de vos extérieurs. Passionné par la nature et les jardins, il vous accompagne
              dans l'entretien et l'aménagement de vos espaces verts avec un regard
              professionnel et créatif.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">Prestations</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">Entretien de jardins</h3>
                <p className="text-sm">Tonte, désherbage et soin des plantations.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">Aménagement paysager</h3>
                <p className="text-sm">Création de massifs et d'espaces de vie extérieurs.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">Taille de haies</h3>
                <p className="text-sm">Pour un jardin net et harmonieux toute l'année.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">Conseils personnalisés</h3>
                <p className="text-sm">Accompagnement sur-mesure pour vos projets verts.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">Réalisations</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=601&q=60",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=602&q=60",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=603&q=60",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=604&q=60",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=605&q=60",
              ].map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Projet de jardin"
                  width={300}
                  height={200}
                  className="rounded object-cover w-full h-40"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-emerald-700 text-white text-center px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-6">
            Envie de transformer votre jardin ? Discutons de votre projet !
          </p>
          <a
            href="mailto:contact@lesjardinsdadrien.fr"
            className="inline-block bg-white text-emerald-700 px-6 py-3 rounded font-medium"
          >
            Écrivez-moi
          </a>
        </FadeIn>
      </section>
    </div>
  );
}

