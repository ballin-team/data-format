export const validCamelToKebabDummy = { camelKey: 'value' };
export const validCamelToKebabDummies: [string, unknown, unknown][] = [
  ['flat object', { camelKey: 'value' }, { 'camel-key': 'value' }],
  [
    'nested object',
    { camelKey: 'value', nestedCamelKey: { nestedKey: 'value' } },
    { 'camel-key': 'value', 'nested-camel-key': { 'nested-key': 'value' } },
  ],
  ['array with flat objects', [{ camelKey: 'value' }], [{ 'camel-key': 'value' }]],
  [
    'array with nested object',
    [{ camelKey: 'value', nestedCamelKey: [{ nestedKey: 'value' }] }],
    [{ 'camel-key': 'value', 'nested-camel-key': [{ 'nested-key': 'value' }] }],
  ],
];
