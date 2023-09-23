export type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

export type SnakeToCamelCaseNested<T> = T extends object
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
    }
  : T;

export type CamelCaseToSnakeNested<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelCaseToSnakeNested<T[K]>;
    }
  : T;

export type CamelCaseToFlatCase<S extends string> = Lowercase<S>;

export type CamelCaseToFlatNested<T> = T extends object
  ? {
    [K in keyof T as CamelCaseToFlatCase<K & string>]: CamelCaseToFlatNested<T[K]>;
  }
  : T;

export type SnakeToFlatCase<S extends string> = S extends `${infer T}_${infer U}`
  ? Lowercase<`${T}${SnakeToFlatCase<U>}`>
  : S;

export type SnakeCaseToFlatNested<T> = T extends object
  ? {
    [K in keyof T as SnakeToFlatCase<K & string>]: SnakeCaseToFlatNested<T[K]>;
  }
  : T;

export type SnakeToKebabCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}-${SnakeToKebabCase<U>}`
  : S;

export type SnakeToKebabCaseNested<T> = T extends object
  ? {
    [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseNested<T[K]>;
  }
  : T;

export type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Lowercase<T> ? '-' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

export type CamelCaseToKebabNested<T> = T extends object
  ? {
    [K in keyof T as CamelToKebabCase<K & string>]: CamelCaseToKebabNested<T[K]>;
  }
  : T;

export type KebabToSnakeCase<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}_${U}`
  : S;

export type KebabCaseToSnakeNested<T> = T extends object
  ? {
    [K in keyof T as KebabToSnakeCase<K & string>]: KebabCaseToSnakeNested<T[K]>;
  }
  : T;


export type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}${Capitalize<KebabToCamelCase<U>>}`
  : S;

export type KebabCaseToCamelNested<T> = T extends object
  ? {
    [K in keyof T as KebabToCamelCase<K & string>]: KebabCaseToCamelNested<T[K]>;
  }
  : T;
