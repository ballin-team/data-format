"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnake = exports.snakeToCamel = void 0;
const helpers_1 = require("./helpers");
/**
 * @description Convert a flat or nested snake case object into camel case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
const snakeToCamel = function (input, useCache) {
    return useCache
        ? (0, helpers_1.modifyObjectKeysWithCache)(input, helpers_1.convertSnakeToCamel)
        : (0, helpers_1.modifyObjectKeys)(input, helpers_1.convertSnakeToCamel);
};
exports.snakeToCamel = snakeToCamel;
/**
 * @description Convert a flat or nested camel case object into snake case. For long objects with repeated keys
 * you can set the **useCache** argument as true.
 */
const camelToSnake = function (input, useCache) {
    return useCache
        ? (0, helpers_1.modifyObjectKeysWithCache)(input, helpers_1.convertCamelToSnake)
        : (0, helpers_1.modifyObjectKeys)(input, helpers_1.convertCamelToSnake);
};
exports.camelToSnake = camelToSnake;
__exportStar(require("./types"), exports);
