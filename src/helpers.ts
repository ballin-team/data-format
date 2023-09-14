const isArray = function (
  input: Record<string, unknown> | Record<string, unknown>[] | unknown,
): input is Record<string, unknown>[] {
  return Array.isArray(input);
};

const isObject = function (
  obj: Record<string, unknown> | Record<string, unknown>[] | unknown,
): obj is Record<string, unknown> {
  return !isValidDate(obj) && obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

export const isValidDate = (value: any) => value instanceof Date;

export const snakeToCamel = (str: string): string =>
  str.replace(/([_-][a-z|0-9])/gi, ($1: string) => $1.toUpperCase().replace('-', '').replace('_', ''));

export const camelToSnake = (str: string): string => str.replace(/([A-Z])/g, ($1: string) => `_${$1.toLowerCase()}`);

export const modifyObjectKeys = function <T>(input: T, formatter: (word: string) => string): any {
  return (function recurse<K extends Record<string, unknown> | Record<string, unknown>[] | unknown>(input: K): K {
    if (isObject(input)) {
      return Object.keys(input).reduce(
        (acc, key) => {
          return Object.assign(acc, { [formatter(key)]: recurse(input[key]) }) as K
        },
        {} as any,
      );
    } else if (isArray(input)) {
      return input.map(i => recurse(i)) as K;
    }
    return input;
  })(input);
};

export const modifyObjectKeysWithCache = function <T>(input: T, formatter: (word: string) => string): any {
  const cache: Record<string, string> = {};
  return (function recurse<K extends Record<string, unknown> | Record<string, unknown>[] | unknown>(input: K): K {
    if (isObject(input)) {
      return Object.keys(input).reduce(
        (acc, key) => {
          let value = cache[key];
          if(!value) {
            cache[key] = formatter(key);
            value = cache[key];
          }
          return Object.assign(acc, { [value]: recurse(input[key]) }) as K
        },
        {} as any,
      );
    } else if (isArray(input)) {
      return input.map(i => recurse(i)) as K;
    }
    return input;
  })(input);
};
