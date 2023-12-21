const Stats = () => {
  return (
    <div className="h-full group">
      <h3 className="bg-gradient-to-r from-orange to-violet inline-block text-transparent bg-clip-text text-lg font-medium">
        Efficiency
      </h3>
      <h2 className="text-5xl text-black dark:text-white font-bold transition">
        +36%
      </h2>
      <span className="font-medium">Compared to last year overall data.</span>
      <svg
        className="w-full mt-8"
        viewBox="0 0 218 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158"
          stroke="url(#paint0_linear_622:13664)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665"
          stroke="url(#paint1_linear_622:13664)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_622:13664"
            x1="217.027"
            y1="15"
            x2="7.91244"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4f42f7" />
            <stop offset="1" stopColor="#12c9fd" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_622:13664"
            x1="218"
            y1="18.3748"
            x2="5.4362"
            y2="18.9795"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff176d" />
            <stop offset="1" stopColor="#ff9818" />
          </linearGradient>
        </defs>
      </svg>
      <ul role="list" className="space-y-3 pt-8">
        <li className="space-x-2">
          <span className="text-md text-black/50 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-6 h-6 inline -mt-1 -ml-1 fill-sevenup"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>Reducing labour costs by 26%</span>
        </li>
        <li className="space-x-2">
          <span className="text-md text-black/50 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 inline -mt-1 -ml-1 fill-sevenup"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>Reducing fuel and toll costs by 9%</span>
        </li>
        <li className="space-x-2">
          <span className="text-md text-black/50 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-6 h-6 inline -mt-1 -ml-1 fill-sevenup"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>Reducing the empty kilometers by 19%</span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
