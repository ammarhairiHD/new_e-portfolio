import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import longnight from "../assets/music/longnight.mp3";
import moonlightcoffee from "../assets/music/moonlightcoffee.mp3";
import softvibes from "../assets/music/softvibes.mp3";
import soothingwaves from "../assets/music/soothing-ocean-waves.mp3";


type Track = {
  label: string;
  src: string;
};

const tracks = [
  { label: "Long Night by Aventure", src: longnight },
  { label: "Moonlight Coffee by Yunior Arronte", src: moonlightcoffee },
  { label: "Soft Vibes by Vital", src: softvibes },
  { label: "Soothing Ocean Waves", src: soothingwaves },
];

type MusicContextType = {
  currentTrack: Track;
  setTrack: (label: string) => void;
  setVolume: (value: number) => void;
  volume: number;
  audio: HTMLAudioElement;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]); // default to first song
  const [audio] = useState<HTMLAudioElement>(new Audio());
  const [volume, setVolume] = useState(0.5); // default 50%

  // Load saved track
  useEffect(() => {
    const savedTrackLabel = localStorage.getItem("musicTrack");
    if (savedTrackLabel) {
      const savedTrack = tracks.find((t) => t.label === savedTrackLabel);
      if (savedTrack) setCurrentTrack(savedTrack);
    }
  }, []);

  // Handle track changes
  useEffect(() => {
    if (!currentTrack.src) {
      audio.pause();
      return;
    }
    audio.src = currentTrack.src;
    audio.loop = true;

    const playMusic = () => {
      audio.play().catch(() => {
        const resumeOnClick = () => {
          audio.play().catch(() => {});
          document.removeEventListener("click", resumeOnClick);
        };
        document.addEventListener("click", resumeOnClick);
      });
    };

    playMusic();
    localStorage.setItem("musicTrack", currentTrack.label);
  }, [currentTrack, audio]);

  // Handle volume changes separately
  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  const setTrack = (label: string) => {
    const track = tracks.find((t) => t.label === label);
    if (track) setCurrentTrack(track);
  };

  return (
    <MusicContext.Provider
      value={{ currentTrack, setTrack, volume, setVolume, audio }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within MusicProvider");
  return context;
};

export const musicTracks = tracks;
