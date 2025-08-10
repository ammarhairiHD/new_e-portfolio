export interface AttributionItem {
  id: number;
  type: "music" | "sound_effect" | "icon";
  source: string;
  artist?: string;
  licenseCode?: string;
  link: string;
  description?: string;
}

export const attributions: AttributionItem[] = [
  // Music Credits
  {
    id: 1,
    type: "music",
    source: "Bensound.com",
    artist: "Aventure",
    licenseCode: "SFEGMDBIQIA07B5J",
    link: "https://www.bensound.com/royalty-free-music/track/adventure",
  },
  {
    id: 2,
    type: "music",
    source: "Bensound.com",
    artist: "Yunior Arronte",
    licenseCode: "NPDUPYDI5XMKRGX0",
    link: "https://www.bensound.com/royalty-free-music/track/memories",
  },
  {
    id: 3,
    type: "music",
    source: "Bensound.com",
    artist: "Vital",
    licenseCode: "RAK0NVHT1XNKHANB",
    link: "https://www.bensound.com/royalty-free-music/track/vital",
  },

  {
    id: 4,
    type: "sound_effect",
    source: "Pixabay",
    artist: "DRAGON-STUDIO",
    link: "https://pixabay.com/sound-effects/whoosh-182379/",
    description: "Whoosh sound effect",
  },

  {
    id: 5,
    type: "icon",
    source: "Flaticon",
    artist: "Flat Icons",
    link: "https://www.flaticon.com/free-icons/headphone",
    description: "Headphone icon",
  },
];
