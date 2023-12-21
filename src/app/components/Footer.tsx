"use client";

import { useEffect, useState } from "react";

const lag: number = 1337;

const Footer = () => {
  const [status, setStatus] = useState<Status>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/status")
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setLoading(false);
        });
    }, lag);
  }, []);

  return (
    <footer className="mx-auto max-w-2xl lg:max-w-4xl py-4 lg:px-0 md:px-0 px-4 w-full">
      <div className="flex flex-row justify-between border-t border-black/5 dark:border-white/5 py-2">
        <div className="mt-1.5">
          <p className="text-xs">
            <a
              href="https://fraight.online"
              className="font-bold text-black dark:text-white hover:underline transition mr-1.5"
            >
              <img
                className="mx-auto h-4 mr-1 inline"
                src="/logo.png"
                alt="Fraight"
              />
              Fraight
            </a>
            All rights reserved.
          </p>
        </div>
        <div className="hidden lg:block -ml-32 mt-1">
          {isLoading ? (
            <span className="text-xxs animate-pulse font-mono">
              Fetching status&hellip;
            </span>
          ) : (
            <div className="px-2 flex flex-row mt-0.5">
              <span className="relative flex h-2 w-2 mt-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sevenup opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sevenup"></span>
              </span>
              <a
                href="/api/status"
                target="_blank"
                className="text-xxs leading-6 font-mono dark:hover:text-white hover:text-black transition"
              >
                {status?.message}
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-row mt-2.5">
          <div>
            <a href="https://www.threads.net/@fraightonline" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="dark:fill-white/50 dark:hover:fill-white fill-black/50 hover:fill-black transition"
              >
                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161" />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://github.com/fraightonline" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="dark:fill-white/50 dark:hover:fill-white ml-2.5 mr-2 fill-black/50 hover:fill-black transition"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="mailto:hello@fraight.online" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="dark:fill-white/50 dark:hover:fill-white fill-black/50 hover:fill-black transition w-5 h-5 -mt-0.5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
