const registry = {};
//@purefnc
const get = (key, defaultValue) => {
    if (!registry[key] && !process.env[key]) {
        console.warn(`${key} not in registry or env var`);
    }
    return registry[key] || process.env[key] || defaultValue;
};
//@purefnc
const set = (key, value) => (registry[key] = value);
export default registry;
export { get, set };
//# sourceMappingURL=index.js.map