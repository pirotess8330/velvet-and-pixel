import type { ImageMetadata } from "astro";
import beforeAfterArtwork from "../assets/before-after-studio/demo-artwork.png";
import beforeAfterIcon from "../assets/before-after-studio/app-icon.png";

import stuffBanner from "../assets/wheres-my-stuff/banner.png";
import stuffIcon from "../assets/wheres-my-stuff/icon.png";

import spinIcon from "../assets/spinreel/icon.png";
import spinBanner from "../assets/spinreel/banner.png";

import windowsIcon from "../assets/cursed-gem-windows/icon.png";
import windowsBanner from "../assets/cursed-gem-windows/banner.webp";

import flashIcon from "../assets/tattoo-flash-sheet-maker/icon.png";
import flashBanner from "../assets/tattoo-flash-sheet-maker/banner.png";

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
  {
    id: "everyday-tools",
    name: "Everyday Tools",
    description:
      "Useful tools for organizing the things you live and work with.",
  },
] as const;
export type CategoryId = (typeof categories)[number]["id"];

export interface App {
  slug: string;
  name: string;
  status:
    | "Available on Google Play"
    | "In Google Play review"
    | "Coming Soon"
    | "In Development"
    | "Planned";
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
    slug: "wheres-my-stuff",
    name: "Where’s My Stuff?",
    status: "Available on Google Play",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.velvetandpixel.wheresmystuff",
    category: "Organization & Everyday Tools",
    categoryId: "everyday-tools",
    platform: "Android",
    description:
      "Remember what you own and where you put it. Organize items with photos, tags and nested places, then find them with search.",
    href: "apps/wheres-my-stuff/",
    icon: stuffIcon,
    artwork: stuffBanner,
  },
  {
    slug: "before-after-studio",
    name: "Before & After Studio",
    status: "Available on Google Play",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.velvetandpixel.beforeafterstudio",
    category: "Photo & Creative Tools",
    categoryId: "photo-apps",
    platform: "Android",
    description: "Create polished before-and-after photo comparisons.",
    href: "apps/before-after-studio/",
    artwork: beforeAfterArtwork,
    icon: beforeAfterIcon,
  },
  {
    slug: "cursed-gem-windows",
    name: "Cursed Gem Windows",
    status: "In Development",
    category: "Puzzle Game",
    categoryId: "games",
    platform: "Android",
    description:
      "Arrange the gems. Restore the light. Explore gothic chapels, bring stained-glass windows back to life, and grow your collection in Peaceful or Challenge play.",
    href: "apps/cursed-gem-windows/",
    artwork: windowsBanner,
    icon: windowsIcon,
  },
  {
    slug: "tattoo-flash-sheet-maker",
    name: "Tattoo Flash Sheet Maker",
    status: "Coming Soon",
    category: "Tattoo & Creative Tools",
    categoryId: "tattoo-apps",
    platform: "Android",
    description:
      "Organize your tattoo artwork, arrange polished flash sheets, add prices and availability labels, and export for print or sharing.",
    href: "apps/tattoo-flash-sheet-maker/",
    icon: flashIcon,
    artwork: flashBanner,
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
    slug: "spinreel",
    name: "SpinReel",
    status: "In Google Play review",
    category: "Video & Creative Tools",
    categoryId: "photo-apps",
    platform: "Android",
    description:
      "Turn photos into suspenseful reveal videos with custom pacing, sound and final-photo effects.",
    href: "apps/spinreel/",
    icon: spinIcon,
    artwork: spinBanner,
  },
];
export const url = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
