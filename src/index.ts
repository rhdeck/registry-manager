const registry: { [key: string]: any } = {};
const get = (key: string, defaultValue?: any) => {
  if (!registry[key] && !process.env[key]) {
    console.warn(`${key} not in registry or env var`);
  }
  return registry[key] || process.env[key] || defaultValue;
};
const set = (key: string, value: string) => (registry[key] = value);
export default registry;
export { get, set };
