'use strict';

var phpTrim = require('trim-php');

function trimCharacters(text, charLength, breakWord, more) {
  var sep = ' ';

  if (typeof charLength !== 'number') {
    charLength = 155;
  }

  if (typeof breakWord !== 'boolean') {
    breakWord = true;
  }

  if (typeof more !== 'string') {
    more = '&hellip;';
  }

  // strip script and style tags
  text = text.replace(/<(script|style)([\S\s]*?)>([\S\s]*?)<\/(script|style)>/ig, '');
  // strip all the other HTML tags
  text = text.replace(/(<([^>]+)>)/ig, '');
  text = phpTrim.trimPhp(text);
  text = text.replace(/[\n\r\t ]+/g, ' ');

  if (text.length > charLength) {
    if (breakWord) {
      text = text.substring(0, charLength);
    } else {
      text = text.substr(0, text.lastIndexOf(sep, charLength));
    }

    text = text + more;
  }

  return text;
}

module.exports = trimCharacters;
