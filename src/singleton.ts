const store: Record<string, string> = {};

const envsSingleton = {
  set: (key: string, value: string) => {
    store[key] = value;
  },
  get: (key: string) => store[key],
};

Object.freeze(envsSingleton);
export default envsSingleton;
