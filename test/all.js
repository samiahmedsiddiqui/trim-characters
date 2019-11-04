var trimCharacters = require('../index');

var text = '<h1>What is Geostatistics?</h1> <script>var a = 1; b = 2;</script><style>p { color: red; }</style><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedChar1 = trimCharacters(text, 70, false, '...');
var trimmedChar2 = trimCharacters(text, 70, true, '...');

console.log('-------------------------------');
console.log('Original Text is:');
console.log('-------------------------------');
console.log(text);
console.log('\n');
console.log('-------------------------------');
console.log('Trim Characters without breaking words:');
console.log('-------------------------------');
console.log(trimmedChar1);
console.log('\n');
console.log('-------------------------------');
console.log('Trim Characters with breaking words:');
console.log('-------------------------------');
console.log(trimmedChar2);
console.log('\n');
