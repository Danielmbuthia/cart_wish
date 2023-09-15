import { HeroSectionProps } from "../../types";

const HeroSection = ({ title, subtitle, link, image }: HeroSectionProps) => {
  return (
    <section className="hero_section">
      <div className="hero_section_div">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl md:text-2xl mt-4 md:mt-8 md:w-[70%]">
          {subtitle}
        </p>
        <a href={link} className="hero_section_a_tag">
          Buy Now
        </a>
      </div>

      <div className="hero_section_div">
        <img
          src={image}
          alt="iphone"
          className="h-[300px] md:h-[500px] transition-all duration-300 transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HeroSection;
