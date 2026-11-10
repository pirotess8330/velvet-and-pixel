import type { ImageMetadata } from "astro";
import beforeAfterArtwork from "../assets/before-after-studio/demo-artwork.png";
import beforeAfterIcon from "../assets/before-after-studio/app-icon.png";

export const categories = [
  {
    id: "games",
    name: "Games",
    description: "Curious worlds and games with a character of their own.",
  },
  {
    id: "photo-apps",
    name: "Photo Apps",
    description: "Creative tools for the images you make.",
  },
  {
    id: "tattoo-apps",
    name: "Tattoo Apps",
    description:
      "A dedicated space for tattoo-focused apps as the collection grows.",
  },
] as const;
export type CategoryId = (typeof categories)[number]["id"];

export interface App {
  slug: string;
  name: string;
  status:
    "In Google Play review" | "Coming Soon" | "In Development" | "Planned";
  category: string;
  categoryId: CategoryId;
  platform: "Android";
  description: string;
  href?: string;
  storeUrl?: string;
  artwork?: ImageMetadata;
  icon?: ImageMetadata;
  screenshots?: { src: string; alt: string }[];
}
export const apps: App[] = [
  {
    slug: "before-after-studio",
    name: "Before & After Studio",
    status: "In Google Play review",
    category: "Photo & Creative Tools",
    categoryId: "photo-apps",
    platform: "Android",
    description: "Create polished before-and-after photo comparisons.",
    href: "apps/before-after-studio/",
    artwork: beforeAfterArtwork,
    icon: beforeAfterIcon,
  },
  {
    slug: "cursed-gem-mosaics",
    name: "Cursed Gem Mosaics",
    status: "In Development",
    category: "Puzzle Game",
    categoryId: "games",
    platform: "Android",
    description:
      "A gothic gem puzzle game featuring themed cathedrals and stained-glass progression.",
  },
  {
    slug: "tattoo-stencil-generator",
    name: "Tattoo Stencil Generator",
    status: "Planned",
    category: "Tattoo & Creative Tools",
    categoryId: "tattoo-apps",
    platform: "Android",
    description:
      "A mobile tool for converting photographs and artwork into clean, printable tattoo stencils. Designed for tattoo artists, with adjustable line extraction, contrast, detail cleanup, and stencil-ready output.",
  },
  {
    slug: "photo-roulette-video-maker",
    name: "SpinReveal",
    status: "In Development",
    category: "Video & Creative Tools",
    categoryId: "photo-apps",
    platform: "Android",
    description:
      "A creative video-making app that turns collections of photos into fast-flipping, roulette-style videos. Customize the starting speed, deceleration, final reveal, hold duration, and captions. Create everything from dramatic slow-down reveals to continuous rapid-fire photo sequences, ready for social media.",
  },
];
export const url = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
