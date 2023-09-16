import ProductList from "./ProductList";
import ProductSideBar from "./ProductSideBar";

const ProductsPage = () => {
  return (
    <section className="grid grid-cols-[1fr,4fr] p-5">
      <ProductSideBar />
      <ProductList />
    </section>
  );
};

export default ProductsPage;
