import LinksWithIcons from "../Navbar/LinksWithIcons";
import rocket from "../../assets/rocket.png";
const ProductSideBar = () => {
  return (
    <aside className="py-3 px-5 rounded-md bg-white">
      <h2 className="text-[26px] mb-3">Category</h2>
      <div className="category_list">
        <LinksWithIcons
          title="Electronics"
          link="products?category=electronics"
          emoji={rocket}
          sidebar
        />
      </div>
    </aside>
  );
};

export default ProductSideBar;
