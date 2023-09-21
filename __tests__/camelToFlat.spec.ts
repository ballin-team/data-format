import { camelToFlat } from '../src';
import * as helper_functions from '../src/helpers';
import { validCamelToFlatDummies, validCameltoFlatDummy } from './dummies';

describe('Input validations', () => {
  it.each(['camelCase', null, undefined, true])('Should return a non-changed value if the argument is %p', input => {
    expect(camelToFlat(input)).toEqual(input);
  });

  it('Should accept empty object', () => {
    const input = {};
    expect(camelToFlat(input)).toEqual(input);
  });

  it('Should accept empty array', () => {
    const input: never[] = [];
    expect(camelToFlat(input)).toEqual(input);
  });

  it('Should call modifyObjectKeysWithCache if useCache is true', () => {
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    camelToFlat(validCameltoFlatDummy, true);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysSpy).toBeCalledTimes(0);
  });

  it('Should call modifyObjectKeys if useCache is false', () => {
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    camelToFlat(validCameltoFlatDummy, false);
    expect(modifyObjectKeysSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(0);
  });

  it('Should call modifyObjectKeys if omit useCache argument', () => {
    const modifyObjectKeysSpy = jest.spyOn(helper_functions, 'modifyObjectKeys');
    const modifyObjectKeysWithCacheSpy = jest.spyOn(helper_functions, 'modifyObjectKeysWithCache');
    camelToFlat(validCameltoFlatDummy);
    expect(modifyObjectKeysSpy).toBeCalledTimes(1);
    expect(modifyObjectKeysWithCacheSpy).toBeCalledTimes(0);
  });
});

describe('Execution validation', () => {
  it.each(validCamelToFlatDummies)('Should a success response %p', (_, input, response) => {
    expect(camelToFlat(input)).toEqual(response);
  });

  it.each(validCamelToFlatDummies)('Should a success response %p (cache version)', (_, input, response) => {
    expect(camelToFlat(input, true)).toEqual(response);
  });
});
