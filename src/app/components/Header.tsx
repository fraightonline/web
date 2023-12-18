const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

const Header = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 py-16 pb-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          AI driven Freight Technologies
        </h1>
        <p className="mt-6 text-md leading-8 text-pearl/50 sm:px-16 px-4">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-pearl/50">{stat.name}</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-pearl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Header;
