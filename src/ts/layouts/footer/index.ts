import { FooterAnimation } from "./FooterAnimation";
import { FooterTime } from "./FooterTime";

export const FooterSection = () => {
  const validationEl = document.querySelector(".footer-seciton");
  if (!validationEl) return;
  //  Footer Animation
  FooterAnimation();

  // Footer Time And version
  FooterTime();
};
