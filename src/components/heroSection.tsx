export default function HeroSection() {
  return (
    <>
      <section className="pt-12 bg-white sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
             Empowering Web2 Engineers to Build the Web3 Future
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              At 2to3DAO, we're on a mission to bridge the gap between Web2 and Web3 development. We believe in the transformative power of blockchain technology and are committed to empowering software engineers from East Africa and the Global South to transition seamlessly into the world of Web3.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Join as a Dev
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
              <img
                className="px-4 md:mpx-8"
                src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
