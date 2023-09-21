"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyObjectKeysWithCache = exports.modifyObjectKeys = exports.convertCamelToSnake = exports.convertSnakeToCamel = exports.isValidDate = void 0;
const isArray = function (input) {
    return Array.isArray(input);
};
const isObject = function (input) {
    return !(0, exports.isValidDate)(input) && input === Object(input) && !Array.isArray(input) && typeof input !== 'function';
};
const isValidDate = (input) => input instanceof Date;
exports.isValidDate = isValidDate;
const convertSnakeToCamel = (input) => input.replace(/([_-][a-z|0-9])/gi, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));
exports.convertSnakeToCamel = convertSnakeToCamel;
const convertCamelToSnake = (input) => input.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`);
exports.convertCamelToSnake = convertCamelToSnake;
const modifyObjectKeys = function (input, formatter) {
    return (function recurse(input) {
        if (isObject(input)) {
            return Object.keys(input).reduce((acc, key) => {
                return Object.assign(acc, { [formatter(key)]: recurse(input[key]) });
            }, {});
        }
        else if (isArray(input)) {
            return input.map(i => recurse(i));
        }
        return input;
    })(input);
};
exports.modifyObjectKeys = modifyObjectKeys;
const modifyObjectKeysWithCache = function (input, formatter) {
    const cache = {};
    return (function recurse(input) {
        if (isObject(input)) {
            return Object.keys(input).reduce((acc, key) => {
                let value = cache[key];
                if (!value) {
                    cache[key] = formatter(key);
                    value = cache[key];
                }
                return Object.assign(acc, { [value]: recurse(input[key]) });
            }, {});
        }
        else if (isArray(input)) {
            return input.map(i => recurse(i));
        }
        return input;
    })(input);
};
exports.modifyObjectKeysWithCache = modifyObjectKeysWithCache;
