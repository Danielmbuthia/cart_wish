const QuantityInput = () => {
  return (
    <>
      <button
        className="w-9 h-9 text-2xl bg-[#ff8848] text-white border-none rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-default"
        disabled
      >
        -
      </button>
      <p className="mx-4 md:mx-6 lg:mx-10 text-center">1</p>
      <button className="w-9 h-9 text-2xl bg-[#ff8848] text-white border-none rounded-full cursor-pointer">
        +
      </button>
    </>
  );
};

export default QuantityInput;
