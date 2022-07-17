import * as wasm from './wasm_bg.wasm';

/**
* @param {number} x
* @param {number} y
* @returns {number}
*/
export function add(x, y) {
    const ret = wasm.add(x, y);
    return ret;
}

/**
* @param {number} x
* @param {number} y
* @returns {number}
*/
export function sub(x, y) {
    const ret = wasm.sub(x, y);
    return ret;
}

