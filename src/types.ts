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
