export const validCamelDummy = { camelKey: 'value' };
export const validCamelDummies: [string, unknown, unknown][] = [
  ['flat object', { camelKey: 'value' }, { camel_key: 'value' }],
  [
    'nested object',
    { camelKey: 'value', nestedCamelKey: { nestedKey: 'value' } },
    { camel_key: 'value', nested_camel_key: { nested_key: 'value' } },
  ],
  ['array with flat objects', [{ camelKey: 'value' }], [{ camel_key: 'value' }]],
  [
    'array with nested object',
    [{ camelKey: 'value', nestedCamelKey: [{ nestedKey: 'value' }] }],
    [{ camel_key: 'value', nested_camel_key: [{ nested_key: 'value' }] }],
  ],
];
