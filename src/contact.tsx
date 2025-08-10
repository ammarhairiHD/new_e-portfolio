import { useState, useEffect, useRef } from "react";
import type { ProfileImageItem } from "./consts/ContactMe";
import { socialLinks, profileImages } from "./consts/ContactMe";
import {
  Instagram,
  Youtube,
  Linkedin,
  Github,
  MessageCircle,
  CircleX,
  Mail,
  MoveDown,
} from "lucide-react";
import { animate, svg, stagger } from "animejs";

// --- Animated Contact Title ---
function ContactTitle() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGElement>(".line");
    const drawables = svg.createDrawable(paths);

    // Stroke draw animation
    animate(drawables, {
      draw: ["0 0", "0 1", "1 1"],
      ease: "inOutQuad",
      duration: 2000,
      delay: stagger(150),
      loop: true,
    });

    // Fill fade-in
    animate(paths, {
      fillOpacity: [0, 1],
      delay: 2500,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 200"
      className="w-full max-w-4xl mx-auto"
    >
      <defs>
        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b53389" />
          <stop offset="100%" stopColor="#04bade" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="90"
        fontFamily="'Pixelify Sans', monospace"
        fill="url(#contactGradient)"
        fillOpacity="0"
        stroke="url(#contactGradient)"
        strokeWidth="2"
      >
        <tspan className="line">C</tspan>
        <tspan className="line">o</tspan>
        <tspan className="line">n</tspan>
        <tspan className="line">t</tspan>
        <tspan className="line">a</tspan>
        <tspan className="line">c</tspan>
        <tspan className="line">t</tspan>
      </text>
    </svg>
  );
}

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ProfileImageItem | null>(
    null
  );

  const handleImageClick = (image: ProfileImageItem) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="text-[#b53389]" size={36} />;
      case "YouTube":
        return <Youtube className="text-[#04bade]" size={36} />;
      case "LinkedIn":
        return <Linkedin className="text-[#b53389]" size={36} />;
      case "Whatapps":
        return <MessageCircle className="text-[#04bade]" size={36} />;
      case "Github":
        return <Github className="text-[#b53389]" size={36} />;
      case "Email":
        return <Mail className="text-[#04bade]" size={36} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact/alone_at_the_sea.png')",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      {/* Fullscreen header */}
      <header className="h-screen flex flex-col justify-center items-center relative z-10">
        <ContactTitle />
        <p className="mt-4 text-xl md:text-2xl text-gray-400 text-center">
          Let's connect and build something great.
        </p>
        <p className="absolute bottom-24 flex flex-row items-center gap-2 text-gray-400">
          <MoveDown />
          scroll down
        </p>
      </header>

      {/* Social Media Section */}
      <section className="flex flex-col items-center relative z-10 p-8 md:p-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
            >
              {getSocialIcon(link.platform)}
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {link.platform}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Images Section */}
      <section className="flex flex-col items-center relative z-10 py-4 mb-20">
        <p className="mb-4 text-gray-400">CLICK THE IMAGE</p>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          {profileImages.map((image) => (
            <img
              key={image.id}
              src={image.imagePath}
              alt={image.altText}
              onClick={() => handleImageClick(image)}
              className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-110 border-2 border-transparent hover:border-[#b53389]"
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center p-8 z-50 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imagePath}
              alt={selectedImage.altText}
              className="max-w-full max-h-[70vh] rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-xl text-gray-200">
              {selectedImage.altText}
            </p>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-10 text-[#04bade] text-3xl font-bold hover:text-[#b53389] transition-colors"
            >
              <CircleX />
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        @keyframes zoom-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
      `}</style>
    </div>
  );
}
