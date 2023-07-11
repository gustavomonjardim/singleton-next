import EnvsProvider from "@/contex";
import envsSingleton from "@/singleton";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    envsSingleton.set("MY_ENV", pageProps.envs.MY_ENV);
  }, [pageProps.envs]);

  return (
    <EnvsProvider initialEnvs={{ MY_ENV: pageProps.envs.MY_ENV }}>
      <Component {...pageProps} />
    </EnvsProvider>
  );
}
