import trimPhp from 'trim-php';

/**
 * Trims text to a certain number of characters.
 * @param text The string that will be trimmed to certain number of characters.
 * @param charLength Number of characters.
 * @param breakWord Whether to break word. If `false` word doesn't break.
 * @param more What to append if `text` needs to be trimmed.
 * @returns Trimmed text.
 */
function trimCharacters(text: string, charLength: number, breakWord: boolean, more: string) {
  const sep = ' ';

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

  // strip script and style tags
  text = text.replace(/<(script|style)([\S\s]*?)>([\S\s]*?)<\/(script|style)>/ig, '');
  // strip all the other HTML tags
  text = text.replace(/(<([^>]+)>)/ig, '');
  text = new trimPhp().trim(text);
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
