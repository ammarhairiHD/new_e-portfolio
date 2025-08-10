import { Music, Volume2, Zap } from "lucide-react";
import type { AttributionItem } from "./consts/credits";
import { attributions } from "./consts/credits";

export default function AttributionsPage() {
  const musicCredits = attributions.filter((item) => item.type === "music");
  const soundEffects = attributions.filter(
    (item) => item.type === "sound_effect"
  );
  const iconCredits = attributions.filter((item) => item.type === "icon");

  const AttributionCard = ({ item }: { item: AttributionItem }) => (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg border-2 border-transparent hover:border-[#b53389] transition-colors duration-300">
      <h3 className="text-xl font-bold mb-1">{item.artist}</h3>
      <p className="text-gray-400 text-sm">
        <span className="font-semibold text-white">Source:</span> {item.source}
      </p>
      {item.licenseCode && (
        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-white">License:</span>{" "}
          {item.licenseCode}
        </p>
      )}
      {item.description && (
        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-white">Description:</span>{" "}
          {item.description}
        </p>
      )}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-[#04bade] hover:underline block"
      >
        View Source
      </a>
    </div>
  );

  return (
    <div className="min-h-screen  text-white my-20 p-8 md:p-16">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/credits/chilling_at_the_sea.png')",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>
      <header className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-bold font-8bit-retro text-transparent bg-clip-text bg-gradient-to-r from-[#b53389] to-[#04bade] mb-4">
          The Ship's Manifest
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
          A sailor's heart, a coder's mind, a musician's soul—these are the
          gifts I carry. My gratitude runs as deep as the ocean for the
          magnificent inspiration they provide.
        </p>
      </header>

      {/* Music Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold font-8bit-retro mb-8 border-b-4 pb-2 inline-block text-[#b53389]">
          <Music size={32} className="inline-block mr-2" />
          Music
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicCredits.map((item) => (
            <AttributionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Sound Effects Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold font-8bit-retro mb-8 border-b-4 pb-2 inline-block text-[#04bade]">
          <Volume2 size={32} className="inline-block mr-2" />
          Sound Effects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soundEffects.map((item) => (
            <AttributionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Icons Section */}
      <section>
        <h2 className="text-4xl font-bold font-8bit-retro mb-8 border-b-4 pb-2 inline-block text-[#b53389]">
          <Zap size={32} className="inline-block mr-2" />
          Icons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iconCredits.map((item) => (
            <AttributionCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
