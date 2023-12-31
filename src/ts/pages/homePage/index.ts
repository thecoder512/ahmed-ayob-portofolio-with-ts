import { HomeSection } from "./homeSection";
import { AboutSection } from "./aboutSection";
import { WorksSection } from "./worksSection";
import { SliderSection } from "./sliderSection";
import { FooterSection } from "../../layouts";

export const HomePage = () => {
  const validationEl = document.querySelector(".hero-img");

  if (!validationEl) return;
  HomeSection();
  AboutSection();
  WorksSection();
  SliderSection();
};
