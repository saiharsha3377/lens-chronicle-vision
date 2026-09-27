import commercialOne from "@/assets/web/commercial-portrait-1.webp.asset.json";
import commercialTwo from "@/assets/web/commercial-portrait-2.webp.asset.json";
import editorialOne from "@/assets/web/editorial-1.webp.asset.json";
import editorialTwo from "@/assets/web/editorial-2.webp.asset.json";
import studioOne from "@/assets/web/editorial-studio-1.webp.asset.json";
import studioTwo from "@/assets/web/editorial-studio-2.webp.asset.json";
import ceremonyThree from "@/assets/web/fashion-ceremony-3.webp.asset.json";
import ceremonyFour from "@/assets/web/fashion-ceremony-4.webp.asset.json";
import mainPortrait from "@/assets/web/main-hq.webp.asset.json";
import swimOne from "@/assets/web/swim-1.webp.asset.json";
import swimTwo from "@/assets/web/swim-2.webp.asset.json";
import ceremonyOne from "@/assets/web/traditional-1.webp.asset.json";
import ceremonyTwo from "@/assets/web/traditional-2.webp.asset.json";
import commercialOneThumb from "@/assets/thumbs/commercial-portrait-1.webp.asset.json";
import commercialTwoThumb from "@/assets/thumbs/commercial-portrait-2.webp.asset.json";
import editorialOneThumb from "@/assets/thumbs/editorial-1.webp.asset.json";
import editorialTwoThumb from "@/assets/thumbs/editorial-2.webp.asset.json";
import studioOneThumb from "@/assets/thumbs/editorial-studio-1.webp.asset.json";
import studioTwoThumb from "@/assets/thumbs/editorial-studio-2.webp.asset.json";
import ceremonyThreeThumb from "@/assets/thumbs/fashion-ceremony-3.webp.asset.json";
import ceremonyFourThumb from "@/assets/thumbs/fashion-ceremony-4.webp.asset.json";
import swimOneThumb from "@/assets/thumbs/swim-1.webp.asset.json";
import swimTwoThumb from "@/assets/thumbs/swim-2.webp.asset.json";
import ceremonyOneThumb from "@/assets/thumbs/traditional-1.webp.asset.json";
import ceremonyTwoThumb from "@/assets/thumbs/traditional-2.webp.asset.json";

export type WorkCategory = "Fashion" | "Editorial" | "Commercial";

export type Work = {
  src: string;
  fullSrc: string;
  title: string;
  category: WorkCategory;
  alt: string;
  shape: "portrait" | "classic" | "wide";
};

export const imagery = {
  main: mainPortrait.url,
  studioOne: studioOneThumb.url,
  studioTwo: studioTwoThumb.url,
  ceremonyFour: ceremonyFourThumb.url,
};

export const works: Work[] = [
  { src: swimOneThumb.url, fullSrc: swimOne.url, title: "Wild Form", category: "Commercial", alt: "Swimwear campaign photographed in a natural landscape", shape: "portrait" },
  { src: ceremonyOneThumb.url, fullSrc: ceremonyOne.url, title: "Soft Ceremony", category: "Fashion", alt: "Fashion portrait from the Soft Ceremony series", shape: "classic" },
  { src: editorialOneThumb.url, fullSrc: editorialOne.url, title: "Ivory Study", category: "Editorial", alt: "Editorial portrait exploring ivory tones and sculptural styling", shape: "portrait" },
  { src: commercialOneThumb.url, fullSrc: commercialOne.url, title: "Still Life", category: "Commercial", alt: "Commercial beauty portrait with precise studio lighting", shape: "classic" },
  { src: ceremonyThreeThumb.url, fullSrc: ceremonyThree.url, title: "Quiet Bloom", category: "Fashion", alt: "Fashion story with traditional styling and a quiet pose", shape: "classic" },
  { src: studioOneThumb.url, fullSrc: studioOne.url, title: "New Geometry", category: "Editorial", alt: "Editorial studio portrait with graphic composition", shape: "portrait" },
  { src: swimTwoThumb.url, fullSrc: swimTwo.url, title: "Verdant", category: "Commercial", alt: "Verdant swimwear campaign portrait", shape: "portrait" },
  { src: ceremonyTwoThumb.url, fullSrc: ceremonyTwo.url, title: "The Gathering", category: "Fashion", alt: "Fashion portrait with ceremonial styling", shape: "classic" },
  { src: editorialTwoThumb.url, fullSrc: editorialTwo.url, title: "Crimson Still", category: "Editorial", alt: "Editorial portrait in a sculptural red gown", shape: "wide" },
  { src: commercialTwoThumb.url, fullSrc: commercialTwo.url, title: "Poise", category: "Commercial", alt: "Polished commercial portrait for a beauty campaign", shape: "portrait" },
  { src: ceremonyFourThumb.url, fullSrc: ceremonyFour.url, title: "Anu", category: "Fashion", alt: "Fashion portrait from the Anu series", shape: "portrait" },
  { src: studioTwoThumb.url, fullSrc: studioTwo.url, title: "Between Lines", category: "Editorial", alt: "Experimental editorial portrait in the studio", shape: "portrait" },
];