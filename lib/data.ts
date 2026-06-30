// Static content for the Namaste Yeti landing page.

export interface Dish {
  name: string;
  desc: string;
  img: string;
  alt: string;
  emoji: string;
  reverse: boolean;
}

export const dishes: Dish[] = [
  {
    name: "Steamed Momo",
    desc: "Hand-folded Himalayan dumplings, steamed and served with house tomato achar.",
    img: "/images/steamed-momo.png",
    alt: "Steamed momo",
    emoji: "🥟",
    reverse: false,
  },
  {
    name: "Jhol Momo",
    desc: "Steamed momo bathed in a warm, spiced sesame-tomato jhol broth.",
    img: "/images/jhol-momo.png",
    alt: "Jhol momo",
    emoji: "🍲",
    reverse: true,
  },
  {
    name: "Paneer Butter Masala",
    desc: "Soft paneer in a rich, buttery tomato-cashew gravy. A vegetarian classic.",
    img: "/images/butter-paneer.png",
    alt: "Paneer butter masala",
    emoji: "🧀",
    reverse: false,
  },
  {
    name: "Chicken Tikka Masala",
    desc: "Charred tandoori chicken simmered in a creamy, spiced masala sauce.",
    img: "/images/chicken-tikka-masala.png",
    alt: "Chicken tikka masala",
    emoji: "🍗",
    reverse: true,
  },
  {
    name: "Himalayan Chowmein",
    desc: "Wok-tossed noodles with crisp vegetables and bold Himalayan spices.",
    img: "/images/Chowmein.png",
    alt: "Himalayan chowmein",
    emoji: "🍜",
    reverse: false,
  },
  {
    name: "Garlic Naan & Curry",
    desc: "Blistered garlic naan, fresh from the oven, paired with curry of the day.",
    img: "/images/naan-curry.png",
    alt: "Garlic naan and curry",
    emoji: "🫓",
    reverse: true,
  },
];

export interface Review {
  quote: string;
  author: string;
}

export const reviews: Review[] = [
  { quote: '"The momo was fresh, juicy, and full of flavor."', author: "— Aarav P." },
  { quote: '"Perfect spot for casual dinner, takeout, or delivery."', author: "— Maria L." },
  { quote: '"Great vegetarian options and bold flavors."', author: "— Devon R." },
  { quote: '"The jhol momo broth is unreal. I keep coming back."', author: "— Sita K." },
];

export const YT_VIDEO_ID = "cWpnm2r3on0";
