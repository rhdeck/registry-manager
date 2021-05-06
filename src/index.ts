const registry: { [key: string]: any } = {};
export const get = (key: string, defaultValue?: any) => {
  if (!registry[key] && !process.env[key]) {
    console.warn(`${key} not in registry or env var`);
  }
  return registry[key] || process.env[key] || defaultValue;
};
export const exists = (key: string) => {
  return registry[key] || process.env[key];
};
export const set = (key: string, value: string) => (registry[key] = value);
export const getAll = () => {
  return { ...process.env, ...registry };
};
export default registry;
