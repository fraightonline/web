import Stats from "./Stats";

const Content = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 my-8 sm:my-16 gap-x-16 gap-y-24">
        <div>
          <Stats />
        </div>
        <div>
          <h2 className="text-4xl text-black dark:text-white font-bold mb-1 transition">
            Next-level route optimization.
          </h2>
          <h3 className="bg-gradient-to-r from-orange to-violet inline-block text-transparent bg-clip-text mb-4 text-lg font-medium">
            Driven by Artificial Intelligence
          </h3>
          <div className="flex flex-col gap-y-4">
            <p className="text-md font-medium">
              Our key components of AI-driven freight technologies include
              predictive analytics for demand forecasting, route optimization,
              and dynamic pricing.
            </p>
            <p className="text-md font-medium">
              Machine learning algorithms analyze historical data to predict
              future demand patterns, allowing companies to optimize inventory
              levels and allocate resources more effectively.
            </p>
            <p className="text-md font-medium">
              Route optimization algorithms consider various factors such as
              traffic, weather conditions, and fuel efficiency to determine the
              most efficient and cost-effective transportation routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
