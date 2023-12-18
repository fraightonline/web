import packageJson from "../../../package.json";

const Topbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 flex flex-row justify-between">
        <a
          href="/"
          className="text-sm font-bold leading-9 text-secondary flex flex-row mt-0.5"
        >
          Fraight
          {/* <img className="mx-auto h-10 w-10" src="" alt="Fraight" /> */}
        </a>
        <div className="mt-2 px-2 flex flex-row">
          <span className="relative flex h-2 w-2 mt-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <a
            href="https://github.com/fraightonline/web"
            target="_blank"
            className="text-xs leading-6 font-mono hover:text-secondary transition"
          >
            v{packageJson.version}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
