import { convertCamelToSnake, modifyObjectKeysWithCache, convertSnakeToCamel, modifyObjectKeys } from './helpers';
/**
 * @description Convert a flat or nested snake case object into camel case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const snakeToCamel = function (input, useCache) {
    return useCache
        ? modifyObjectKeysWithCache(input, convertSnakeToCamel)
        : modifyObjectKeys(input, convertSnakeToCamel);
};
/**
 * @description Convert a flat or nested camel case object into snake case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const camelToSnake = function (input, useCache) {
    return useCache
        ? modifyObjectKeysWithCache(input, convertCamelToSnake)
        : modifyObjectKeys(input, convertCamelToSnake);
};
export * from './types';
