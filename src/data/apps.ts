import type { ImageMetadata } from "astro";
import beforeAfterArtwork from "../assets/before-after-studio/demo-artwork.png";
import beforeAfterIcon from "../assets/before-after-studio/app-icon.png";

import stuffBanner from "../assets/wheres-my-stuff/banner.png";
import stuffIcon from "../assets/wheres-my-stuff/icon.png";

import spinIcon from "../assets/spinreel/icon.png";
import spinBanner from "../assets/spinreel/banner.png";

import windowsIcon from "../assets/cursed-gem-windows/celestial-moon-icon.png";
import windowsBanner from "../assets/cursed-gem-windows/banner.webp";

import flashIcon from "../assets/tattoo-flash-sheet-maker/icon.png";
import flashBanner from "../assets/tattoo-flash-sheet-maker/banner.png";

import mosaicsBanner from "../assets/cursed-gem-mosaics/banner.webp";
import mosaicsIcon from "../assets/cursed-gem-mosaics/icon.png";
import potionsBanner from "../assets/cursed-potion-lab/banner.webp";
import potionsIcon from "../assets/cursed-potion-lab/icon.png";

import stencilIcon from "../assets/tattoo-stencil-maker/icon.png";

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
    slug: "cursed-gem-mosaics",
    name: "Cursed Gem Mosaics",
    status: "Coming Soon",
    category: "Jewel Placement Puzzle",
    categoryId: "games",
    platform: "Android",
    description:
      "Piece together a little magic. Fit luminous crystals into ornate mosaics across three Art Nouveau worlds.",
    href: "apps/cursed-gem-mosaics/",
    icon: mosaicsIcon,
    artwork: mosaicsBanner,
  },
  {
    slug: "cursed-potion-lab",
    name: "Cursed Potion Lab",
    status: "Coming Soon",
    category: "Potion Mixing & Discovery",
    categoryId: "games",
    platform: "Android",
    description:
      "Mix a little mischief. Pour luminous liquids, stir in sparkling ingredients, and discover curious potions—with some unusual company.",
    href: "apps/cursed-potion-lab/",
    icon: potionsIcon,
    artwork: potionsBanner,
  },
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
      "Arrange the gems. Restore the light. Preview nine gothic chapels and larger Grand Restorations in the upcoming expansion, with Peaceful and Challenge play.",
    href: "apps/cursed-gem-windows/",
    artwork: windowsBanner,
    icon: windowsIcon,
  },
  {
    slug: "tattoo-flash-sheet-maker",
    name: "Tattoo Flash Sheet Maker",
    status: "Available on Google Play",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.velvetandpixel.tattooflashsheetmaker",
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
    slug: "tattoo-stencil-maker",
    href: "apps/tattoo-stencil-maker/",
    icon: stencilIcon,
    name: "Tattoo Stencil Maker",
    status: "In Development",
    category: "Tattoo & Creative Tools",
    categoryId: "tattoo-apps",
    platform: "Android",
    description:
      "Turn imported artwork into black-and-white tattoo stencils. Compare detail presets, mirror your design, and prepare PNG or print-sized PDF output.",
  },
  {
    slug: "spinreel",
    name: "SpinReel",
    status: "Available on Google Play",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.velvetandpixel.spinreel",
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
