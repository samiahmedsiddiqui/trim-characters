'use strict';

var phpTrim = require('trim-php');

function trimCharacters(text, charLength, breakWord, more) {
  var sep = ' ';

  if (!charLength) {
    charLength = 155;
  }

  if (!more) {
    more = '&hellip;';
  }

  // StripTags
  text = text.replace(/<(script|style)[^>]*?>.*?<\/\\1>/si, '');
  text = text.replace(/<[^>]*>/g, '');
  text = phpTrim.trimPhp(text);
  text = text.replace(/[\n\r\t]+/, ' ');

  if (text.length > charLength) {
    if (breakWord) {
      text = text.substr(0, text.lastIndexOf(sep, charLength));
    } else {
      text = text.substring(0, charLength);
    }

    text = text + more;
  }

  return text;
}

module.exports = trimCharacters;
