import { useState } from "react";
import QuantityInput from "../Common/QuantityInput";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  images: [
    "https://via.placeholder.com/500x500?text=Product+Image+1",
    "https://via.placeholder.com/500x500?text=Product+Image+2",
    "https://via.placeholder.com/500x500?text=Product+Image+3",
    "https://via.placeholder.com/500x500?text=Product+Image+4",
  ],
  stock: 10,
};

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-8 px-4 lg:px-12">
      <div className="flex md:flex-col flex-wrap gap-2 p-2 m-4">
        {product.images.map((image, index) => (
          <img
            src={image}
            alt={product.title}
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
            w-20 h-20 object-cover rounded-md cursor-pointer transition-transform duration-200 ease-in-out
            ${selectedImage === index ? "scale-[1.12]" : ""}
          `}
          />
        ))}
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2 p-4">
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-3/5 lg:w-1/3 p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
          {product.title}
        </h1>
        <p className="mb-4 leading-relaxed text-gray-600">
          {product.description}
        </p>
        <p className="mb-4 text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <h2 className="text-xl font-bold">Quantity:</h2>
        <div className="flex items-center text-xl font-bold mt-1 mb-4">
          <QuantityInput />
        </div>
        <button className="w-full md:w-auto bg-[#ff8848] text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff8848]">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default SingleProductPage;
