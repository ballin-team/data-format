import { CamelCaseToSnakeNested, SnakeToCamelCaseNested } from './types';
/**
 * @description Convert a flat or nested snake case object into camel case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export declare const snakeToCamel: <T>(input: T, useCache?: boolean) => SnakeToCamelCaseNested<T>;
/**
 * @description Convert a flat or nested camel case object into snake case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
export declare const camelToSnake: <T>(input: T, useCache?: boolean) => CamelCaseToSnakeNested<T>;
export * from './types';
//# sourceMappingURL=index.d.ts.map