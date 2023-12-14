const Content = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 text-asphalt/75">
      <div className="w-ful sm:w-2/3 flex flex-col gap-y-4">
        <h3 className="text-xl font-bold text-asphalt -mb-3">
          Duis aute irure dolor in reprehenderit in voluptate velit
        </h3>
        <p className="font-medium text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
          <span className="text-blue font-semibold hover:underline hover:cursor-pointer">
            tempor incididunt
          </span>{" "}
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat
          cupidatat non priodent , sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Content;
