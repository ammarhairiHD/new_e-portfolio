import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { animate, text, stagger } from "animejs";
import { menuItems } from "../consts/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const { words } = text.split(headingRef.current, {
        words: { wrap: "clip" },
      });

      animate(words, {
        y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
        duration: 750,
        ease: "out(3)",
        delay: stagger(100),
        loop: true,
      });
    }
  }, []);

  return (
    <nav className="fixed  top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <p
            ref={headingRef}
            className="text-lg text-[#b53389] text-shadow-lg text-shadow-fuchsia-900 font-bold"
          >
            Ammar <br /> Hairi
          </p>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-[#04bade] hover:text-[#b53389] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden border-2 text-[#04bade ] border-[#04bade]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-[#04bade]" />
          ) : (
            <Menu size={28} className="text-[#04bade]" />
          )}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a]  px-4 pb-3">
          <ul className="flex flex-col space-y-3 ]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="block hover:text-[#b53389] border-2 border-[#04bade] p-0.5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
