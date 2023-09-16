import { useState } from "react";

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
    <section className="flex items-center justify-center py-8 px-12">
      <div className="flex items-center">
        <div className="flex flex-col flex-wrap gap-2 p-2 m-4">
          {product.images.map((image, index) => (
            <img
              src={image}
              alt={product.title}
              key={index}
              onClick={() => setSelectedImage(index)}
              className={
                selectedImage === index
                  ? "w-20 h-20 object-cover rounded-md cursor-pointer transition-all duration-[0.2s] ease-in-out scale-[1.12] "
                  : "w-20 h-20 object-cover rounded-md cursor-pointer transition-all duration-[0.2s] ease-in-out"
              }
            />
          ))}
        </div>
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="w-[500px] h-[500px] object-cover rounded-xl"
        />
      </div>
      <div className="w-[35%] py-4 px-6">
        <h1 className="text-xl font-bold mb-3">{product.title}</h1>
        <p className="mb-4 leading-[1.4]">{product.description}</p>
        <p className="mb-4 text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <h2 className=" text-xl font-bold">Quantity:</h2>
        <div className="flex items-center text-xl font-bold mt-1 mb-4">
          <button
            className=" w-9 h-9 text-2xl bg-[#ff8848] text-white border-none rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-default"
            disabled
          >
            -
          </button>
          <p className="mx-10 text-center">1</p>
          <button className="w-9 h-9 text-2xl bg-[#ff8848] text-white border-none rounded-full cursor-pointer">
            +
          </button>
        </div>
        <button className="search_button w-fit py-2 px-4">Add to Cart</button>
      </div>
    </section>
  );
};

export default SingleProductPage;
