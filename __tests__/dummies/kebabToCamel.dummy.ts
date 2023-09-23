export const validKebabToCamelDummy = { 'kebab-key': 'value' };
export const validKebabToCamelDummies: [string, unknown, unknown][] = [
  ['flat object', { 'kebab-key': 'value' }, { kebabKey: 'value' }],
  [
    'nested object',
    { 'kebab-key': 'value', 'nested-kebab-key': { 'nested-key': 'value' } },
    { kebabKey: 'value', nestedKebabKey: { nestedKey: 'value' } },
  ],
  ['array with flat objects', [{ 'kebab-key': 'value' }], [{ kebabKey: 'value' }]],
  [
    'array with nested object',
    [{ 'kebab-key': 'value', 'nested-kebab-key': [{ 'nested-key': 'value' }] }],
    [{ kebabKey: 'value', nestedKebabKey: [{ nestedKey: 'value' }] }],
  ],
];
