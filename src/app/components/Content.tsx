import Stats from "./Stats";

const Content = () => {
  return (
    <div className="isolate bg-white">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff9818] to-[#ff176d] opacity-10 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 my-8 sm:my-32 gap-x-16 gap-y-24">
          <div>
            <Stats />
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold mb-1">
              Next-level route optimization.
            </h2>
            <h3 className="bg-gradient-to-r from-orange to-violet inline-block text-transparent bg-clip-text mb-4 text-lg font-medium">
              Driven by Artificial Intelligence
            </h3>
            <div className="flex flex-col gap-y-4">
              <p className="text-md text-black/50 font-medium">
                Our key components of AI-driven freight technologies include
                predictive analytics for demand forecasting, route optimization,
                and dynamic pricing.
              </p>
              <p className="text-md text-black/50 font-medium">
                Machine learning algorithms analyze historical data to predict
                future demand patterns, allowing companies to optimize inventory
                levels and allocate resources more effectively.
              </p>
              <p className="text-md text-black/50 font-medium">
                Route optimization algorithms consider various factors such as
                traffic, weather conditions, and fuel efficiency to determine
                the most efficient and cost-effective transportation routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
