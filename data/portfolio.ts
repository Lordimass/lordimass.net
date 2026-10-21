export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  type: string;
  href: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
};

export type ArtPiece = {
  title: string;
  src: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Lordimass" },
  { label: "Twitch", href: "https://twitch.tv/lordimass" },
  { label: "YouTube", href: "https://youtube.com/@lordimass" },
  { label: "Discord", href: "https://discord.com/users/969949353605230604" },
  { label: "Wiki", href: "https://reformation.wiki.gg/lordimass" }
];

export const hytaleMods: Project[] = [
    // TODO: Show awards on projects
    // TODO: Multiple links (source code, etc.)
    // TODO: Images
  {
    name: "Blackout",
    type: "HytaleModding Jam [June 2026]",
    href: "https://hytalemodjam.com/submissions/da78d7af-5783-4d5d-ac69-d574f517ea63",
    description: "Created by Paralaxe, Ev0, Riprod, and I, Blackout is a Backrooms themed co-op minigame that will " +
        "push you and your friends ability to cooperate, communicate, and ultimately escape the backrooms.",
    tags: ["Competition Entry", "Minigame", "Horror"],
    image: "/images/projects/blackout.png",
    imageAlt: "Blackout Logo"
  },
  {
    name: "Clay Factoria",
    type: "Hytale New Worlds Contest",
    href: "https://github.com/Lordimass/Clay-Factoria",
    description: "Create clay automatons using the power of Gaia's life essence! Clay Factoria adds clay creatures" +
        " to the world of Orbis. Powered by Gaia's life essence, these little automata can be programmed to" +
        " perform tasks for you.",
    tags: ["Competition Entry", "NPCs", "Automation"],
    image: "/images/projects/ClayFactoria.jpg",
    imageAlt: "Clay Factoria Logo"
  },
  {
    name: "Dialogue",
    type: "Java Library and Mod",
    href: "https://www.curseforge.com/hytale/mods/dialogue",
    description: "Dialogue adds a new NPC action which is used to start a dialogue with a player. The mod allows for" +
        "fully custom dialogues with multiple choice answers, animated character portraits, and Animal Crossing " +
        "style speech.",
    tags: ["Library", "NPCs"],
    image: "/images/projects/Dialogue.jpg",
    imageAlt: "A dialogue box which reads 'Did you hit your head on a rock or something?!'"
  },
  {
    name: "Creditor",
    type: "Java Library and Mod",
    href: "https://www.curseforge.com/hytale/mods/creditor",
    description: "A Hytale Plugin and Java Library to credit mod creators and provide information on the mods which" +
        " are installed.",
    tags: ["Library"],
    image: "/images/projects/Creditor.png",
    imageAlt: "A UI with a list of mods, Blackout is selected, showing the author information for it."
  }
]

export const projects: Project[] = [
  {
    name: "Lordimass.net",
    type: "Portfolio website",
    href: "https://github.com/Lordimass/lordimass.net",
    description:
      "This website! Take a look around :D",
    tags: ["Web Development", "Next.js", "React"]
  },
  {
    name: "Havoc Fundraising",
    type: "Community project",
    href: "https://havoc-hub.com",
    description:
      "A six year long project which I led, with seven 24hr fundraising livestreams for various charities. We raised " +
        "over £10,000, thanks to the support of everyone involved.",
    tags: ["Events", "Community", "Fundraising"]
  },
  {
    name: "ThisShopIsSoGay",
    type: "Paid Work",
    href: "https://thisshopissogay.com",
    description:
      "An ecommerce site built from the ground up for a local business, includes tools for staff to see orders which" +
        "have been placed, support for global currency conversion, and a built-in product editor.",
    tags: ["Web Development", "Paid Work"],
  },
  {
    name: "GlowShops",
    type: "Paid Work",
    href: "https://glowshops.com",
    description:
      "An ecommerce site built off the back of ThisShopIsSoGay.com, for the same business.",
    tags: ["Web Development", "Paid Work"]
  }
];

export const artPieces: ArtPiece[] = [
  "Tentacle monster.jpg",
  "talon.jpg",
  "starwars day 2023.jpg",
  "Snow Leopard.png",
  "Silly Guy.png",
  "Robot.jpg",
  "resting knight.jpg",
  "Reformation Logo Mk.3 [DISCORD].png",
  "Prolifice World Map.png",
  "lurker.jpg",
  "Lordi Sticker.png",
  "Konrad.png",
  "iadoros.jpg",
  "hooded creature.jpg",
  "hooded creature 2.jpg",
  "hollowknight demon boy.jpg",
  "George Monster.png",
  "Finemine Commission.png"
].map((file) => ({
  title: file.replace(/\.[^.]+$/, ""),
  src: `/images/art/${file}`
}));
