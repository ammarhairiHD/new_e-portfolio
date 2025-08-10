export interface StoryItem {
  id: number;
  background?: string;
  year: string;
  label: string;
  description: string;
  story?: string;
  quote?: string;
  path?: string;
}

export const storyItems: StoryItem[] = [
  {
    id: 1,
    label: "Chapter I: The Sailor's Vision",
    background: "/story/story_1.png",
    year: "Entry 2022 - 2023",
    description:
      "At 21, I started as a marine deck rating, a sailor with my eyes on the horizon. My childhood dream, inspired by the legendary Captain Barbarossa, was to command my own vessel and sail the world. I was ready to navigate the open seas, to write my own legend.",
  },
  {
    id: 2,
    label: "Chapter II: A New Destination",
    background: "/story/story_2.png",
    year: "Entry 2023",
    description:
      "My course changed when I discovered ChatGPT. The power of AI felt like a new, uncharted ocean. While still working on the ship, I began a new journey: learning to code. Starting with HTML, CSS, and JavaScript, my new vision was to build systems and robots that could one day save lives, just like a captain saving a ship from a storm.",
    story:
      'My first successful project was a website for my sea instructor, Puan Liyana. I named the restaurant website "Rumah Burok." After this, I knew my destiny was no longer just the ocean. I left the marine world, began freelancing, and even worked as a chef at America Breakfast to finance my self-taught coding adventure.',
  },
  {
    id: 3,
    label: "Chapter III: Building the Fleet",
    background: "/story/story_3.png",
    year: "Entry 2023 - 2024",
    description:
      "The seas of the internet were not always calm. I heard stories of people being scammed and sent to Myanmar—a dark whirlpool of deception. This inspired me to build a gamified cybersecurity platform called Young Guards. I also developed Guardina, a women's safety platform. Both projects were built to protect people, a new kind of a sailor's duty.",
    story:
      "My projects started to gain traction, and Young Guards even received a grant. I also got my first IT job at Bubbles O2. My boss, Encik Arifin, was my new captain, believing in me despite my lack of a traditional IT background. He encouraged me to get a part-time degree in computer science, a new compass for my journey. In November 2024, I set a new course at UiTM Shah Alam.",
  },
  {
    id: 4,
    label: "Chapter IV: Captain of Two Worlds",
    background: "/story/story_4.png",
    year: "2025",
    description:
      "At 24, my ship is full. I'm a student at UiTM, working on both Young Guards and Guardina, and I just got my first major job as a junior software engineer at Govtech GNU Kementerian Digital. It was a shocking moment—from marine deck rating to software engineer.",
    story:
      'My new crew is amazing—supportive, young, and fun. They are guiding me, helping me become a better "digital architect." I’m grateful for every lesson they share.',
  },
  {
    id: 5,
    label: "The Code Within",
    background: "/story/story_5.png",
    year: "current",
    description:
      "I still love the sea and the sound of its waves. But now, I also love to code. My two worlds have merged. Like Captain Barbarossa, my ultimate goal is to save people. That's why I created Young Guards and Guardina. I will never leave the sea behind; instead, I'm finding ways to combine my love for it with my new love for coding.",
    story:
      "Maybe one day I can truly change the world, just like my idol. I believe that as long as I work hard and keep my faith, I can.",
    quote:
      '"The people who are crazy enough to think they can change the world are the ones who do." - Steve Jobs',
  },
];
