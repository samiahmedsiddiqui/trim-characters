"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trim_php_1 = __importDefault(require("trim-php"));
function trimCharacters(text, charLength, breakWord, more) {
    let sep = ' ';
    if (typeof text === 'undefined') {
        text = '';
    }
    if (typeof charLength !== 'number') {
        charLength = 155;
    }
    if (typeof breakWord !== 'boolean') {
        breakWord = true;
    }
    if (typeof more !== 'string') {
        more = '&hellip;';
    }
    text = text.replace(/<(script|style)([\S\s]*?)>([\S\s]*?)<\/(script|style)>/ig, '');
    text = text.replace(/(<([^>]+)>)/ig, '');
    text = new trim_php_1.default().trim(text);
    text = text.replace(/[\n\r\t ]+/g, ' ');
    if (text.length > charLength) {
        if (breakWord) {
            text = text.substring(0, charLength);
        }
        else {
            text = text.substr(0, text.lastIndexOf(sep, charLength));
        }
        text = text + more;
    }
    return text;
}
module.exports = trimCharacters;
