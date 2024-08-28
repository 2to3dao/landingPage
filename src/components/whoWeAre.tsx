import womanImage from "../assets/womanOnLaptop.png";

export default function WhoWeAre() {
  return (
    <>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Who we are
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              2to3DAO is a decentralized autonomous organization (DAO) dedicated
              to equipping Web2 engineers with the skills, knowledge, and
              opportunities they need to thrive in the Web3 ecosystem. Whether
              you're an experienced developer looking to expand your horizons or
              a newcomer eager to explore the possibilities of blockchain, We
              are here to guide you every step of the way.
            </h3>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={womanImage} />
          </div>
        </div>
      </div>
    </>
  );
}
