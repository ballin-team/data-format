import {CamelCaseToSnakeNested, SnakeToCamelCaseNested} from './types';
import {camelToSnake, modifyObjectKeysWithCache, snakeToCamel, modifyObjectKeys} from './helpers';

/**
 *
 * @param input Object to convert keys to camelCase
 * @param cache boolean
 * @returns Object with keys converted to camelCase
 */
export const toCamel = function <T>(input: T, cache?: boolean): SnakeToCamelCaseNested<T> {
  return cache ? modifyObjectKeysWithCache(input, snakeToCamel) : modifyObjectKeys(input, snakeToCamel);
};

/**
 *
 * @param input Object to convert keys to snake_case
 * @returns Object with keys converted to snake_case
 */
export const toSnake = function <T>(input: T, cache?: boolean): CamelCaseToSnakeNested<T> {
  return cache ? modifyObjectKeysWithCache(input, camelToSnake) : modifyObjectKeys(input, camelToSnake);
};
