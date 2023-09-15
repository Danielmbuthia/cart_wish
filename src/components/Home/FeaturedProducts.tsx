import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="m-[65px]">
      <h2 className="text-[48px] text-center mb-[65px]">FeaturedProducts</h2>
      <div className="flex items-center justify-evenly mb-[65px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedProducts;
