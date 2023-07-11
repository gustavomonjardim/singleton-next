import { useEnvs } from "@/contex";
import envsSingleton from "@/singleton";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

const getText = () => {
  console.log(envsSingleton.get("MY_ENV"));
};

const Teste = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { envs } = useEnvs();

  console.log(envs);

  return (
    <div>
      {envs.MY_ENV}
      <button onClick={getText}>Click me</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      envs: {
        MY_ENV: process.env.MY_ENV,
      },
    },
  };
};

export default Teste;
