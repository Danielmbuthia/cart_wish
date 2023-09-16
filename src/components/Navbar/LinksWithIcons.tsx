import { LinksWithIconsProps } from "../../types";

const LinksWithIcons = ({
  title,
  link,
  emoji,
  sidebar,
}: LinksWithIconsProps) => {
  return (
    <a
      href={link}
      className={
        sidebar
          ? "flex items-center flex-row-reverse justify-ends font-bold text-xl py-3 px-5 rounded-md transition-all duration-[0.15s] ease-in-out hover:bg-[#f6f6f6]"
          : "flex items-center font-bold text-base"
      }
    >
      {title}{" "}
      <img
        src={emoji}
        alt={`image-${emoji}`}
        className={sidebar ? "w-8 ml-0 mr-2" : "w-6"}
      />
    </a>
  );
};

export default LinksWithIcons;
