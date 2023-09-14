import { snakeToCamel } from '../src';
import * as helper_functions from '../src/helpers';
import { validSnakeDummies, validSnakeDummy } from './dummies/snakeToCamel.dummy';

describe('Input validations', () => {
  it.each(['snake_case', null, undefined, true])('Should return a non-changed value if the argument is %p', input => {
    expect(snakeToCamel(input)).toEqual(input);
  });

  it('Should accept empty object', () => {
    const input = {};
    expect(snakeToCamel(input)).toEqual(input);
  });

  it('Should accept empty array', () => {
    const input: never[] = [];
    expect(snakeToCamel(input)).toEqual(input);
  });

  it('Should call modifyObjectKeysWithCache if useCache is true', () => {
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    snakeToCamel(validSnakeDummy, true);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysSpy).toBeCalledTimes(0);
  });

  it('Should call modifyObjectKeys if useCache is false', () => {
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    snakeToCamel(validSnakeDummy, false);
    expect(modifyObjectKeysSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(0);
  });

  it('Should call modifyObjectKeys if omit useCache argument', () => {
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    snakeToCamel(validSnakeDummy);
    expect(modifyObjectKeysSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(0);
  });
});

describe('Execution validation', () => {
  it.each(validSnakeDummies)('Should a success response %p', (_, input, response) => {
    expect(snakeToCamel(input)).toEqual(response);
  });

  it.each(validSnakeDummies)('Should a success response %p (cache version)', (_, input, response) => {
    expect(snakeToCamel(input, true)).toEqual(response);
  });
});
