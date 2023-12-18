const Articles = () => {
  return (
    <div className="bg-pearl pt-96 pb-16 text-asphalt transition relative isolate overflow-hidden">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6998fa] to-[#0557ff] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6998fa] to-[#0557ff] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Lorem ipsum dolor<span className="text-secondary">.</span>
          </h2>
          <p className="leading-7 text-secondary">Sit amet consectetur</p>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-2">
            <article className="flex max-w-xl flex-col items-start">
              <h3 className="mt-0 text-lg leading-6 font-bold">
                Consectetur<span className="text-secondary text-2xl">.</span>
              </h3>
              <p className="mt-2 text-sm font-normal text-asphalt/75 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
            <article className="flex max-w-xl flex-col items-start">
              <h3 className="mt-0 text-lg leading-6 font-bold">
                Eiusmod tempor<span className="text-secondary text-2xl">.</span>
              </h3>
              <p className="mt-2 text-sm font-normal text-asphalt/75 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
            <article className="flex max-w-xl flex-col items-start">
              <h3 className="mt-0 text-lg leading-6 font-bold">
                Dolore magna aliqua
                <span className="text-secondary text-2xl">.</span>
              </h3>
              <p className="mt-2 text-sm font-normal text-asphalt/75 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
