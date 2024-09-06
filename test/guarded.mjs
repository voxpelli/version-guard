const value = { foo: 'bar' };

// eslint-disable-next-line no-console
console.log(
  'Does object have foo property?',
  // Use of incredibly modern JS API which will for sure fail on older versions
  // eslint-disable-next-line n/no-unsupported-features/es-builtins, n/no-unsupported-features/es-syntax
  Object.hasOwn(value, 'foo')
);
