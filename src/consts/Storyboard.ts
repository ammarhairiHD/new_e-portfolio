export interface ChapterItem {
  slug: string; // e.g., "the-sailors-vision" or "1"
  chapterNumber: number;
  label: string;
  background?: string;
  image1?: string;
  image2?: string;
  year: string;
  description: string;
  story?: string;
  quote?: string;
  finale?: boolean;
}

export interface LevelItem {
  level: number;
  title: string;
  chapters: ChapterItem[];
  ready?: string;
}

export const storyLevels: LevelItem[] = [
  {
    level: 24,
    title: "Level 24: Origins & Anchors",
    chapters: [
      {
        slug: "1",
        chapterNumber: 1,
        label: "Chapter I: The Sailor's Vision",
        background: "/story/background/24/story_1.webp",
        image1: "/story/images/24/marine_time.webp",
        image2: "/story/images/24/barbarossa.webp",
        year: "Entry 2022 - 2023",
        description:
          "At 21, I started as a marine deck rating, a sailor with my eyes on the horizon. My childhood dream, inspired by the legendary Captain Barbarossa, was to command my own vessel and sail the world. I was ready to navigate the open seas, to write my own legend.",
      },
      {
        slug: "2",
        chapterNumber: 2,
        label: "Chapter II: A New Destination",
        background: "/story/background/24/story_2.webp",
        image1: "/story/images/24/rumah_burok.webp",
        year: "Entry 2023",
        description:
          "My course changed when I discovered ChatGPT. The power of AI felt like a new, uncharted ocean. While still working on the ship, I began a new journey: learning to code. Starting with HTML, CSS, and JavaScript, my new vision was to build systems and robots that could one day save lives, just like a captain saving a ship from a storm.",
        story:
          'My first successful project was a website for my sea instructor, Puan Liyana. I named the restaurant website "Rumah Burok." After this, I knew my destiny was no longer just the ocean. I left the marine world, began freelancing, and even worked as a chef at America Breakfast to finance my self-taught coding adventure.',
      },
      {
        slug: "3",
        chapterNumber: 3,
        label: "Chapter III: Building the Fleet",
        background: "/story/background/24/story_3.webp",
        image1: "/story/images/24/scams.webp",
        image2: "/story/images/24/bubbleso2.webp",
        year: "Entry 2023 - 2024",
        description:
          "The seas of the internet were not always calm. I heard stories of people being scammed and sent to Myanmar—a dark whirlpool of deception. This inspired me to build a gamified cybersecurity platform called Young Guards. I also developed Guardina, a women's safety platform. Both projects were built to protect people, a new kind of a sailor's duty.",
        story:
          "My projects started to gain traction, and Young Guards even received a grant. I also got my first IT job at Bubbles O2. My boss, Encik Arifin, was my new captain, believing in me despite my lack of a traditional IT background. He encouraged me to get a part-time degree in computer science, a new compass for my journey. In November 2024, I set a new course at UiTM Shah Alam.",
      },
      {
        slug: "4",
        chapterNumber: 4,
        label: "Chapter IV: Captain of Two Worlds",
        background: "/story/background/24/story_4.webp",
        image1: "/story/images/24/mtdc.webp",
        image2: "/story/images/24/youngguards.webp",
        year: "2025",
        description:
          "At 24, my ship is full. I'm a student at UiTM, working on both Young Guards and Guardina, and I just got my first major job as a junior software engineer at Govtech GNU Kementerian Digital. It was a shocking moment—from marine deck rating to software engineer.",
        story:
          'My new crew is amazing—supportive, young, and fun. They are guiding me, helping me become a better "digital architect." I’m grateful for every lesson they share.',
      },
      {
        slug: "5",
        chapterNumber: 5,
        label: "Chapter V: The Code Within",
        background: "/story/background/24/story_5.webp",
        image1: "/story/images/24/govtech.webp",
        year: "end of 2025",
        description:
          "I still love the sea and the sound of its waves. But now, I also love to code. My two worlds have merged. Like Captain Barbarossa, my ultimate goal is to save people. That's why I created Young Guards and Guardina. I will never leave the sea behind; instead, I'm finding ways to combine my love for it with my new love for coding",
        story:
          "Maybe one day I can truly change the world, just like my idol. I believe that as long as I work hard and keep my faith, I can.",
        quote:
          '"The people who are crazy enough to think they can change the world are the ones who do." - Steve Jobs',
      },
      {
        slug: "6",
        chapterNumber: 6,
        label: "Chapter VI: The First Time I Moved",
        background: "/story/background/24/story_6.jpeg",
        year: "2024 - 2025",
        description:
          "At 24, something in me began to change. I was still afraid, still unsure, and still carrying old wounds—but for the first time, I chose to move instead of staying where I was.",
        story:
          "I was young, shy, and scared for most of my life. I did not believe in myself the way I should have. I often lied to myself, avoided chances, and stayed inside the version of me that felt safe—even when that version was unhappy.\n\nBut when I reached 24, something changed. I started freelancing. I began approaching clients, taking on work, working out, and pitching Young Guards. I asked myself: who would accept a former marine deck rating trying to build something in IT? Maybe nobody. But I tried anyway.\n\nWas I afraid? Yes. Did I feel pain when I was rejected, when I trained alone, when I pitched alone, and when nothing seemed certain? Yes. But I realised something important: staying where I was hurt too. The pain of trying to grow felt better than the pain of remaining stuck.\n\nI did not become perfect. I still made mistakes, and I still had days when I did not like myself. But I started building systems, winning trust, receiving a RM35K grant for my business, and getting my first proper job in IT. Slowly, I became someone I once thought I could never be.\n\nI do not want to go back to the person I was. I want to keep becoming the man I want to be. Not because it is easy, but because I finally understand that growth asks for courage, pain, patience, and faith.",
        quote:
          '"The pain of discipline is temporary, but the pain of regret lasts forever."',
        finale: true,
      },
    ],
  },
  {
    level: 25,
    title: "Level 25: Still Becoming",
    chapters: [
      {
        slug: "1",
        chapterNumber: 1,
        label: "Chapter I: The Storm Within",
        background: "/story/background/24/story_1.webp",
        image1: "/story/images/25/former_team.webp",
        image2: "/story/images/25/google.webp",
        year: "Entry 2026",
        description:
          "Two years into my career, I began to understand that working life is not always about code, teamwork, and good memories. Companies also have drama, politics, pressure, and betrayal. When difficult times came, I saw different sides of people—including myself.",
        story:
          "Before 2026, my workplace felt like a second home. I had supportive seniors, good friends, and an environment where I could grow. But when our office relocated and merged into a new government environment, things changed. The tension grew, the fun disappeared, and I could see the stress affecting everyone around me. I started showing a side of myself that I did not like. That was when I learned one of the hardest lessons: I cannot control other people, the workplace, or the situation—but I can learn to control myself.\n\nThis year also marked a personal victory. After five years, I quit nicotine on 1 December 2025. I stayed nicotine-free throughout 2026, and even the smells feels bad to me now. At the same time, my business began to grow. Google gave us USD 2,000 in cloud credits, and what once felt like a one-person mission became a team of nine people. Work was difficult, but other parts of my life were moving forward. I learned to keep looking for the good, even during a storm.",
      },
      {
        slug: "2",
        chapterNumber: 2,
        label: "Chapter II: People Come and Go",
        background: "/story/background/24/story_2.webp",
        image1: "/story/images/25/new_team.webp",
        image2: "/story/images/25/the_boys.webp",
        year: "Middle 2026",
        description:
          "The people who helped shape my early career began moving into new chapters of their own lives. My seniors and one of my closest workplace friends left, and the office no longer felt the same.",
        story:
          "Our group became smaller—from eight people to four. We used to camp, have BBQ nights, hang out after work, and make ordinary days feel special. Even though we still talk and meet sometimes, life changed. My former seniors found new opportunities, many started families, and everyone began carrying their own responsibilities.\n\nDuring this time, I also met someone who taught me new things about life. I had never experienced feelings beyond friendship in this way before, so it was confusing, new, and meaningful. Maybe I am still learning what it means to care for someone deeply. What I know is that every person who enters your life brings a lesson. Some lessons are joyful, some are painful, and some leave you confused—but all of them help you grow.",
      },
      {
        slug: "3",
        chapterNumber: 3,
        label: "Chapter III: Letting Go of Ego",
        background: "/story/background/24/story_3.webp",
        year: "Mid 2026",
        description:
          "Not every conflict needs to become a war. A difficult situation with my boss taught me that silence, assumptions, and ego can make a misunderstanding feel much bigger than it really is.",
        story:
          "For months, I carried frustration at work. I stopped talking to my boss, ignored him, and blamed him for everything. Every time I saw him, I felt more anger. I let my ego take control, and I nearly sent a resignation letter.\n\nThen I spoke to my mother and someone important in my life. They encouraged me to put aside my pride and have an honest conversation. When I finally confronted the situation, my boss explained his side and apologized. I realized I had judged him before fully understanding what had happened.\n\nI should have spoken earlier. That experience taught me to listen before assuming, to communicate before walking away, and to remember that the other person may also be facing struggles we cannot see. Allah continues to teach me through every difficult moment.",
      },
      {
        slug: "4",
        chapterNumber: 4,
        label: "Chapter IV: Above the Clouds",
        background: "/story/background/24/story_4.webp",
        image1: "/story/images/25/abc_cerficiate.jpeg",
        image2: "/story/images/25/abc_team.jpeg",
        year: "October 2026",
        description:
          "I stepped outside my comfort zone and travelled to Annapurna Base Camp for the first time without my family or close friends. What began with fear became one of the most meaningful journeys of my life.",
        story:
          "I had never hiked above 2,000 metres before, and I had never travelled this far alone. I joined a travel group after replacing my aunt, who could not go. At first, I was nervous. I did not fully understand how everything would work, but I decided to go anyway.\n\nThat decision changed me. My teammates were mostly older than me, but they were supportive, fun, and full of life. My roommate, Abang Kama, became someone I will always remember—positive, kind, tall, funny, and always able to lift the mood. Along the trail, we struggled together, laughed together, and helped one another keep moving.\n\nAnnapurna taught me not to give up when the path becomes painful. Every step matters. You keep walking until you reach the base camp, and you never leave your teammates behind. The pain and suffering eventually led to views more beautiful than I could have imagined. I hope to meet them all again. I love them",
        quote:
          '"If you pray for the rain, you have to deal with the mud too." — Denzel Washington',
      },
      {
        slug: "5",
        chapterNumber: 5,
        label: "Chapter V: Still Becoming",
        background: "/story/background/24/story_5.webp",
        image1: "/story/images/25/certificate.jpeg",
        image2: "/story/images/25/award_event.webp",
        year: "Current",
        description:
          "While I was in the Himalayas, another dream became real: I won the Best Malaysia Website Award for 2025. My boss represented me at the ceremony, and I received the news surrounded by the mountains.",
        story:
          "At 25, I am still learning. I am balancing work, business, study, relationships, and the responsibility of leading a growing team. I do not know what 2027 will bring. Will it bring success, pain, new opportunities, or another difficult lesson? Maybe all of them.\n\nBut Level 25 taught me that growth is not only about achievements. It is about becoming kinder, more supportive, more understanding, and more human. I want to become the best version of myself—not because life will become easy, but because I want to face whatever comes next with a better heart.\n\nInshaAllah.",
      },
      {
        slug: "6",
        chapterNumber: 6,
        label: "Chapter VI: Not There Yet, Still Moving",
        background: "/story/background/24/story_6.jpeg",
        year: "2026",
        description:
          "Someone once asked me how I manage work, part-time study, a business with nine people, workouts, and the things I love, like hiking. I did not have a perfect answer. I am not the man I want to be yet—I am simply still trying.",
        story:
          "Am I becoming the man I wanted to be? Honestly, no. I am still far from that.\n\nWhen someone asked me how I managed work, part-time study, a business with nine people, workouts, and hiking, I did not really know what to say. I am not kind enough, brilliant enough, strong enough, or successful enough to call myself an example. I know myself. I still have weaknesses, bad days, fears, and parts of me I am still trying to fix.\n\nBut maybe the answer is simpler than I thought: I am trying. Really trying.\n\nNobody is born perfect. Everyone is carrying a goal that feels difficult, frustrating, or even impossible. Maybe it is saving people, building something meaningful, making the world better, stopping wars, fighting climate change, or hiking fourteen peaks in five months. Those dreams can sound impossible—but what matters is that you keep trying.\n\nTry when you are tired. Try when you feel behind. Try when nobody claps for you. Try again the next day. Because to become the person you want to be, this is what it takes: consistency.\n\nMaybe one day, the goal will be achieved. Until then, I will keep trying.",
        finale: true,
      },
    ],
  },
];
