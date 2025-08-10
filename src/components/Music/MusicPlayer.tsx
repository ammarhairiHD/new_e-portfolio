import { useState } from "react";
import { useMusic, musicTracks } from "./MusicContent";
import { Play, Pause, Volume2, X, ChevronUp, CassetteTape } from "lucide-react";

export default function MusicPlayer() {
  const { currentTrack, setTrack, volume, setVolume, audio } = useMusic();
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(!audio.paused);

  const handlePlayPause = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 ">
      {/* Popup Track List */}
      {open && (
        <div className="mb-2 bg-[#1a1a1a] text-white p-3 rounded-lg shadow-lg w-[90vw] sm:w-64 mx-auto border-4 border-[#04bade] relative">
          <h3 className="text-sm sm:text-base font-bold mb-3 text-[#b53389]">
            <CassetteTape />{" "}
            <span className="text-[#04bade]">Select Track</span>
          </h3>
          <ul className="space-y-2">
            {musicTracks.map((track) => (
              <li key={track.label}>
                <button
                  onClick={() => setTrack(track.label)}
                  className={`w-full text-left p-2 rounded border-2 transition-colors duration-150 ${
                    currentTrack.label === track.label
                      ? "bg-[#b53389] border-[#04bade] text-white"
                      : "bg-[#262626] border-[#b53389] hover:bg-[#333]"
                  }`}
                >
                  {track.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="absolute -top-3 right-2 text-[#04bade] text-xs">
            ▲
          </div>
        </div>
      )}

      {/* Main Bar */}
      <div className="flex items-center gap-2 sm:gap-4 bg-[#1a1a1a] text-white px-3 sm:px-4 py-2 rounded-full shadow-lg border-4 border-[#b53389]">
        {/* Play / Pause */}
        <button
          onClick={handlePlayPause}
          className="hover:text-[#04bade] transition-colors"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Track Name */}
        <div className="relative overflow-hidden w-[100px] sm:w-[150px] h-5 text-xs sm:text-sm">
          <div className="absolute whitespace-nowrap animate-marquee">
            {currentTrack.label}
          </div>
        </div>

        {/* Volume */}
        <Volume2 size={16} className="hidden sm:block" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 sm:w-20 accent-[#04bade] cursor-pointer"
        />

        {/* Toggle Popup */}
        <button
          onClick={() => setOpen(!open)}
          className="hover:text-[#04bade] transition-colors"
        >
          {open ? <X size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
    </div>
  );
}
