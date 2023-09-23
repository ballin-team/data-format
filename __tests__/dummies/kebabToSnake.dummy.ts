export const validKebabToSnakeDummy = { 'kebab-key': 'value' };
export const validKebabToSnakeDummies: [string, unknown, unknown][] = [
  ['flat object', { 'kebab-key': 'value' }, { kebab_key: 'value' }],
  [
    'nested object',
    { 'kebab-key': 'value', 'nested-kebab-key': { 'nested-key': 'value' } },
    { kebab_key: 'value', nested_kebab_key: { nested_key: 'value' } },
  ],
  ['array with flat objects', [{ 'kebab-key': 'value' }], [{ kebab_key: 'value' }]],
  [
    'array with nested object',
    [{ 'kebab-key': 'value', 'nested-kebab-key': [{ 'nested-key': 'value' }] }],
    [{ kebab_key: 'value', nested_kebab_key: [{ nested_key: 'value' }] }],
  ],
];
