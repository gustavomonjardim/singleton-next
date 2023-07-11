import { createContext, useContext, useState } from "react";

type Envs = { envs: Record<string, string> };

const EnvsContext = createContext<Envs>({ envs: {} });

const EnvsProvider = ({
  children,
  initialEnvs,
}: {
  children: React.ReactNode;
  initialEnvs: Record<string, string>;
}) => {
  const [envs] = useState(initialEnvs);
  return (
    <EnvsContext.Provider value={{ envs }}>{children}</EnvsContext.Provider>
  );
};

export const useEnvs = () => {
  const context = useContext(EnvsContext);
  if (context === undefined) {
    throw new Error("context undefined");
  }

  return context;
};

export default EnvsProvider;
