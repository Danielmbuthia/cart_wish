import { LinksWithIconsProps } from "../../types";

const LinksWithIcons = ({ title, link, emoji }: LinksWithIconsProps) => {
  return (
    <a href={link} className="flex items-center font-bold text-base">
      {title} <img src={emoji} alt={`image-${emoji}`} className=" w-6" />
    </a>
  );
};

export default LinksWithIcons;
