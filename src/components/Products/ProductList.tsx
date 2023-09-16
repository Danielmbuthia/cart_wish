import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="p-3 pl-8">
      <header className="flex items-center justify-between ">
        <h2 className="text-[26px]">Products</h2>
        <select
          name="sort"
          id=""
          className="text-base font-medium h-8 py-o px-1 border-none outline-none rounded-md"
        >
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="flex flex-wrap justify-evenly">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;
