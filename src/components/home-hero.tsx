import { HeroParallax } from "./ui/hero-parallax";

export const HomeHero = () => {
  const row1 = [
    "/home-gallery/h/6.jpeg",
    "/home-gallery/h/7.jpeg",
    "/home-gallery/h/9.jpeg",
    "/home-gallery/h/10.jpeg",
    "/home-gallery/h/2.jpeg",
    "/home-gallery/h/14.jpeg",
    "/home-gallery/h/16.jpeg",
    "/home-gallery/h/19.jpeg",
  ];
  const row2 = [
    "/home-gallery/v/1.jpeg",
    "/home-gallery/v/3.jpeg",
    "/home-gallery/v/4.jpeg",
    "/home-gallery/v/5.jpeg",
    "/home-gallery/v/8.jpeg",
    "/home-gallery/v/11.jpeg",
    "/home-gallery/v/12.jpeg",
    "/home-gallery/v/26.jpeg",
    "/home-gallery/v/13.jpeg",
    "/home-gallery/v/15.jpeg",
    "/home-gallery/v/17.jpeg",
    "/home-gallery/v/18.jpeg",
  ];
  const row3 = [
    "/home-gallery/h/21.jpeg",
    "/home-gallery/h/24.jpeg",
    "/home-gallery/h/27.jpeg",
    "/home-gallery/h/28.jpeg",
    "/home-gallery/v/20.jpeg",
    "/home-gallery/v/22.jpeg",
    "/home-gallery/v/23.jpeg",
    "/home-gallery/v/25.jpeg",
  ];
  return <HeroParallax row1={row1} row2={row2} row3={row3} />;
};
