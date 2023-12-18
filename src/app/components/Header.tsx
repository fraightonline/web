const Header = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 py-16 pb-24">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition">
          Announcing our new AI model.{" "}
          <a href="#" className="font-semibold text-secondary">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          AI driven Freight Technologies
          <span className="text-secondary">.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-asphalt/75">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition"
          >
            Get started
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 hover:text-secondary transition"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
