import packageJson from "../../../package.json";

const Topbar = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 flex flex-row justify-between mb-4 mt-2">
      <a
        href="/"
        className="text-sm font-bold leading-9 text-secondary flex flex-row mt-0.5"
      >
        <img className="mx-auto h-10" src="/logo.png" alt="Fraight" />
      </a>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-1">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-pearl/10 hover:ring-pearl/30 transition">
          Announcing our new AI model
        </div>
      </div>
      <div className="mt-2 px-2 flex flex-row">
        <a
          href="https://github.com/fraightonline/web"
          target="_blank"
          className="text-xs leading-6 font-mono text-pearl/50 hover:text-pearl transition"
        >
          v{packageJson.version}
        </a>
      </div>
    </div>
  );
};

export default Topbar;
