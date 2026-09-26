import commercialOne from "@/assets/web/commercial-portrait-1.webp.asset.json";
import commercialTwo from "@/assets/web/commercial-portrait-2.webp.asset.json";
import editorialOne from "@/assets/web/editorial-1.webp.asset.json";
import editorialTwo from "@/assets/web/editorial-2.webp.asset.json";
import studioOne from "@/assets/web/editorial-studio-1.webp.asset.json";
import studioTwo from "@/assets/web/editorial-studio-2.webp.asset.json";
import ceremonyThree from "@/assets/web/fashion-ceremony-3.webp.asset.json";
import ceremonyFour from "@/assets/web/fashion-ceremony-4.webp.asset.json";
import mainPortrait from "@/assets/web/main.webp.asset.json";
import swimOne from "@/assets/web/swim-1.webp.asset.json";
import swimTwo from "@/assets/web/swim-2.webp.asset.json";
import ceremonyOne from "@/assets/web/traditional-1.webp.asset.json";
import ceremonyTwo from "@/assets/web/traditional-2.webp.asset.json";

export type WorkCategory = "Fashion" | "Editorial" | "Commercial";

export type Work = {
  src: string;
  title: string;
  category: WorkCategory;
  alt: string;
  shape: "portrait" | "classic" | "wide";
};

export const imagery = {
  main: mainPortrait.url,
  studioOne: studioOne.url,
  studioTwo: studioTwo.url,
  ceremonyFour: ceremonyFour.url,
};

export const works: Work[] = [
  { src: swimOne.url, title: "Wild Form", category: "Commercial", alt: "Swimwear campaign photographed in a natural landscape", shape: "portrait" },
  { src: ceremonyOne.url, title: "Soft Ceremony", category: "Fashion", alt: "Fashion portrait from the Soft Ceremony series", shape: "classic" },
  { src: editorialOne.url, title: "Ivory Study", category: "Editorial", alt: "Editorial portrait exploring ivory tones and sculptural styling", shape: "portrait" },
  { src: commercialOne.url, title: "Still Life", category: "Commercial", alt: "Commercial beauty portrait with precise studio lighting", shape: "classic" },
  { src: ceremonyThree.url, title: "Quiet Bloom", category: "Fashion", alt: "Fashion story with traditional styling and a quiet pose", shape: "classic" },
  { src: studioOne.url, title: "New Geometry", category: "Editorial", alt: "Editorial studio portrait with graphic composition", shape: "portrait" },
  { src: swimTwo.url, title: "Verdant", category: "Commercial", alt: "Verdant swimwear campaign portrait", shape: "portrait" },
  { src: ceremonyTwo.url, title: "The Gathering", category: "Fashion", alt: "Fashion portrait with ceremonial styling", shape: "classic" },
  { src: editorialTwo.url, title: "Crimson Still", category: "Editorial", alt: "Editorial portrait in a sculptural red gown", shape: "wide" },
  { src: commercialTwo.url, title: "Poise", category: "Commercial", alt: "Polished commercial portrait for a beauty campaign", shape: "portrait" },
  { src: ceremonyFour.url, title: "Anu", category: "Fashion", alt: "Fashion portrait from the Anu series", shape: "portrait" },
  { src: studioTwo.url, title: "Between Lines", category: "Editorial", alt: "Experimental editorial portrait in the studio", shape: "portrait" },
];