const isArray = function (
  input: unknown,
): input is Record<string, unknown>[] {
  return Array.isArray(input);
};

const isObject = function (
  input: unknown,
): input is Record<string, unknown> {
  return !isValidDate(input) && input === Object(input) && !Array.isArray(input) && typeof input !== 'function';
};

export const isValidDate = (input: unknown) => input instanceof Date;

export const convertSnakeToCamel = (input: string): string =>
  input.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toUpperCase().replace('-', '').replace('_', ''));

export const convertCamelToSnake = (input: string): string =>
  input.replace(/([A-Z])/g, ($1: string) => `_${$1.toLowerCase()}`);

export const convertCamelToFlat = (input: string): string => input.toLowerCase();

export const convertSnakeToFlat = (input: string): string =>
  input.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toLowerCase().replace('-', '').replace('_', ''));

export const convertSnakeToKebab = (input: string): string =>
  input.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toLowerCase().replace('_', '-'));

export const convertCamelToKebab = (input: string): string =>
  input.replace(/([A-Z])/g, ($1: string) => `-${$1.toLowerCase()}`);

export const convertKebabToSnake = (input: string): string =>
  input.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toLowerCase().replace('-', '_'));

export const convertKebabToCamel = (input: string): string =>
  input.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toUpperCase().replace('-', ''));

export const modifyObjectKeys = function <T>(input: T, formatter: (word: string) => string): any {
  return (function recurse<K>(input: K): K {
    if (isObject(input)) {
      return Object.keys(input).reduce((acc, key) => {
        return Object.assign(acc, { [formatter(key)]: recurse(input[key]) }) as K;
      }, {} as any);
    } else if (isArray(input)) {
      return input.map(i => recurse(i)) as K;
    }
    return input;
  })(input);
};

export const modifyObjectKeysWithCache = function <T>(input: T, formatter: (word: string) => string): any {
  const cache: Record<string, string> = {};
  return (function recurse<K>(input: K): K {
    if (isObject(input)) {
      return Object.keys(input).reduce((acc, key) => {
        let value = cache[key];
        if (!value) {
          cache[key] = formatter(key);
          value = cache[key];
        }
        return Object.assign(acc, { [value]: recurse(input[key]) }) as K;
      }, {} as any);
    } else if (isArray(input)) {
      return input.map(i => recurse(i)) as K;
    }
    return input;
  })(input);
};
