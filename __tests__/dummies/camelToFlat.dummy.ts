export const validCameltoFlatDummy = { camelKey: 'value' };
export const validCamelToFlatDummies: [string, unknown, unknown][] = [
  ['flat object', { camelKey: 'value' }, { camelkey: 'value' }],
  [
    'nested object',
    { camelKey: 'value', nestedCamelKey: { nestedKey: 'value' } },
    { camelkey: 'value', nestedcamelkey: { nestedkey: 'value' } },
  ],
  ['array with flat objects', [{ camelKey: 'value' }], [{ camelkey: 'value' }]],
  [
    'array with nested object',
    [{ camelKey: 'value', nestedCamelKey: [{ nestedKey: 'value' }] }],
    [{ camelkey: 'value', nestedcamelkey: [{ nestedkey: 'value' }] }],
  ],
];
