const Articles = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 pb-16">
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
  );
};

export default Articles;
