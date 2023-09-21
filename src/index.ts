import { CamelCaseToFlatNested, CamelCaseToSnakeNested, SnakeCaseToFlatNested, SnakeToCamelCaseNested } from './types';
import {
  convertCamelToSnake,
  modifyObjectKeysWithCache,
  convertSnakeToCamel,
  modifyObjectKeys,
  convertCamelToFlat, convertSnakeToFlat,
} from './helpers';

/**
 * @description Convert a flat or nested snake case object into camel case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const snakeToCamel = function <T>(input: T, useCache?: boolean): SnakeToCamelCaseNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertSnakeToCamel)
    : modifyObjectKeys(input, convertSnakeToCamel);
};

/**
 * @description Convert a flat or nested camel case object into snake case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const camelToSnake = function <T>(input: T, useCache?: boolean): CamelCaseToSnakeNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertCamelToSnake)
    : modifyObjectKeys(input, convertCamelToSnake);
};

/**
 * @description Convert a flat or nested camel case object into flat case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const camelToFlat = function <T>(input: T, useCache?: boolean): CamelCaseToFlatNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertCamelToFlat)
    : modifyObjectKeys(input, convertCamelToFlat);
}

/**
 * @description Convert a flat or nested snake case object into flat case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const snakeToFlat = function <T>(input: T, useCache?: boolean): SnakeCaseToFlatNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertSnakeToFlat)
    : modifyObjectKeys(input, convertSnakeToFlat);
}

export * from './types';
