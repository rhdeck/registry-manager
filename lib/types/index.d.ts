declare const registry: {
    [key: string]: any;
};
declare const get: (key: string, defaultValue?: any) => any;
declare const set: (key: string, value: string) => string;
export default registry;
export { get, set };
