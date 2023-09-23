import {
  CamelCaseToFlatNested, CamelCaseToKebabNested,
  CamelCaseToSnakeNested, KebabCaseToCamelNested, KebabCaseToSnakeNested,
  SnakeCaseToFlatNested,
  SnakeToCamelCaseNested,
  SnakeToKebabCaseNested,
} from './types';
import {
  convertCamelToSnake,
  modifyObjectKeysWithCache,
  convertSnakeToCamel,
  modifyObjectKeys,
  convertCamelToFlat,
  convertSnakeToFlat,
  convertSnakeToKebab,
  convertCamelToKebab,
  convertKebabToSnake,
  convertKebabToCamel,
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

/**
 * @description Convert a flat or nested snake case object into kebab case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const snakeToKebab = function <T>(input: T, useCache?: boolean): SnakeToKebabCaseNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertSnakeToKebab)
    : modifyObjectKeys(input, convertSnakeToKebab);
};

/**
 * @description Convert a flat or nested camel case object into kebab case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const camelToKebab = function <T>(input: T, useCache?: boolean): CamelCaseToKebabNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertCamelToKebab)
    : modifyObjectKeys(input, convertCamelToKebab);
};

/**
 * @description Convert a flat or nested kebab case object into snake case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const kebabToSnake = function <T>(input: T, useCache?: boolean): KebabCaseToSnakeNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertKebabToSnake)
    : modifyObjectKeys(input, convertKebabToSnake);
};


/**
 * @description Convert a flat or nested kebab case object into camel case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export const kebabToCamel = function <T>(input: T, useCache?: boolean): KebabCaseToCamelNested<T> {
  return useCache
    ? modifyObjectKeysWithCache(input, convertKebabToCamel)
    : modifyObjectKeys(input, convertKebabToCamel);
};

export * from './types';
