var toArray = require('to-element-array');

module.exports = fixMany;
function fixMany(elements) {
  var els = toArray(elements);
  for (var i = 0; i < els.length; i++) {
    fix(els[i]);
  }
}

function fix(element) {
  if (element.tagName.toLowerCase() === 'input' && element.type.toLowerCase() === 'number') {
    element.type = 'text';
    element.pattern='-?[0-9]+\.?[0-9]+';
  } else {
    fixMany(element.getElementsByTagName('input'));
  }
}