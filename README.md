# trim-characters

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Dependency Status][dependency-image]][dependency-url]

Trims text to a certain number of characters. You can define either to break-word to maintain the number of characters limit or characters limit may decrease to avoid breaking words.

## Install

Via `npm`
```
npm install trim-characters
```

Via Yarn
```
yarn add trim-characters
```

## Usage

Import Package in `Node.js`.

```javascript
var trimCharacters = require('trim-characters');
```

Import Package in `React`.

```javascript
import trimCharacters from 'trim-characters';
```

## Example

### Trims text to a certain number of characters in `Node.js`

```javascript
var trimCharacters = require('trim-characters');

var text = '<h1>What is Geostatistics?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedChar1 = trimCharacters(text, 70, false, '...');
var trimmedChar2 = trimCharacters(text, 70, true, '...');

console.log('Trim Characters with breaking words: ', trimmedChar1);
console.log('Trim Characters without breaking words: ', trimmedChar2);
```

### Trims text to a certain number of characters in `React`

```javascript
import trimCharacters from 'trim-characters';

var text = '<h1>What is Geostatistics?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedChar1 = trimCharacters(text, 70, false, '...');
var trimmedChar2 = trimCharacters(text, 70, true, '...');

console.log('Trim Characters with breaking words: ', trimmedChar1);
console.log('Trim Characters without breaking words: ', trimmedChar2);
```

## Parameters

| Attributes |   Type  | Required |   Default  | Description                                                                                                     |
|------------|:-------:|:--------:|:----------:|-----------------------------------------------------------------------------------------------------------------|
| text       |  String |    Yes   |            | Text to trim.                                                                                                   |
| charLength | Integer |    No    |    `155`   | Number of characters.                                                                                           |
| breakWord  | Boolean |    No    |   `true`   | Either to break words or not.<br><br>If it is set to `false` then `charLength` may decrease to **AVOID** breaking words. |
| more       |  String |    No    | `&hellip;` | What to append if the `text` needs to be trimmed.                                                               |

## Return

Trimmed text.

## Tested

This package is tested with the `Node.js` and `React` Application. 

[npm-image]: https://img.shields.io/npm/v/trim-characters.svg
[npm-url]: https://www.npmjs.com/package/trim-characters
[downloads-image]: https://img.shields.io/npm/dm/trim-characters.svg

[travis-image]: https://img.shields.io/travis/com/samiahmedsiddiqui/trim-characters.svg?label=travis-ci
[travis-url]: https://travis-ci.com/samiahmedsiddiqui/trim-characters

[appveyor-url]: https://ci.appveyor.com/project/samiahmedsiddiqui/trim-characters
[appveyor-image]: https://img.shields.io/appveyor/ci/samiahmedsiddiqui/trim-characters.svg?label=appveyor

[dependency-image]: https://img.shields.io/david/samiahmedsiddiqui/trim-characters.svg
[dependency-url]: https://david-dm.org/samiahmedsiddiqui/trim-characters
