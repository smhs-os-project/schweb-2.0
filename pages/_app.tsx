// Due to NProgress, ESlint always complained these two errors
// even I prepared the typing file for NProgress. I choose to
// disable these two and I wish it can be fixed in future.
// : pan93412 - May 23, 2021.
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import "@fontsource/noto-sans-tc";
import "../styles/global.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
