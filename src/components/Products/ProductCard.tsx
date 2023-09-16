import iphone from "../../assets/iphone.jpg";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
const ProductCard = () => {
  return (
    <article className="w-[275px] h-[330px] m-5 rounded-xl shadow-productCard bg-white overflow-hidden">
      <div className="h-[200px] text-center border-b border-gray-300 ">
        <a href="/product/1">
          <img src={iphone} alt="product image" className="h-full" />
        </a>
      </div>
      <div className="py-3 px-5">
        <h3 className="text-base font-bold">$999</h3>
        <p className="text-sm mt-1">Iphone 15</p>
        <footer className="flex items-center justify-between my-2 mx-0">
          <div className="flex items-center">
            <p className="flex items-center h-8 py-1 px-8 font-semibold rounded-md bg-[#fca311] text-white">
              <img src={star} alt="star" className="w-5 mr-1" /> 5.0
            </p>
            <p className="text-base ml-2 text-gray-600 py-0 px-3 border-l-2 border-[#dcdcdc]">
              120
            </p>
          </div>
          <button className="w-10 h-10 border-none rounded-full bg-transparent cursor-pointer ">
            <img src={basket} alt="basket button" className="w-full h-full" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
