const LoginPage = () => {
  return (
    <section className="flex items-center justify-center">
      <form action="" className="w-1/2 md:w-1/3 py-8 px-12 mt-8 bg-white">
        <h2 className="text-4xl mb-7 text-center">Login Form</h2>
        <div className="flex flex-col mb-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="text-base font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-9 px-2 text-sm font-medium rounded-md border border-solid border-black"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="text-base font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="h-9 px-2 text-sm font-medium rounded-md border border-solid border-black"
            />
          </div>
          <button type="submit" className="search_button h-10 w-full mt-6 mb-2">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
