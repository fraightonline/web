const Topbar = () => {
  return (
    <nav>
      <div className="max-w-2xl lg:max-w-4xl flex flex-row justify-between mx-auto py-4 lg:px-0 md:px-0 px-4">
        <div className="flex flex-row justify-between w-full">
          <div className="mt-2">
            <p className="text-sm">
              <a
                href="https://fraight.online"
                className="font-bold text-black dark:text-white hover:underline transition mr-1.5 transition"
              >
                <img
                  className="mx-auto h-6 mr-1.5 inline"
                  src="/logo.png"
                  alt="Fraight"
                />
                Fraight
              </a>
              AI driven freight technologies.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
