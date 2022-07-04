const value = { foo: 'bar' };

console.log(
  'Does object have foo property?',
  // Use of incredibly modern JS API which will for sure fail on older versions
  Object.hasOwn(value, 'foo')
);
