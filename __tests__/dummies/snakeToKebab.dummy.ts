export const validSnakeToKebabDummy = { snake_key: 'value' };
export const validSnakeToKebabDummies: [string, unknown, unknown][] = [
  ['flat object', { snake_key: 'value' }, { 'snake-key': 'value' }],
  [
    'nested object',
    { snake_key: 'value', nested_snake_key: { nested_key: 'value' } },
    { 'snake-key': 'value', 'nested-snake-key': { 'nested-key': 'value' } },
  ],
  ['array with flat objects', [{ snake_key: 'value' }], [{ 'snake-key': 'value' }]],
  [
    'array with nested object',
    [{ snake_key: 'value', nested_snake_key: [{ nested_key: 'value' }] }],
    [{ 'snake-key': 'value', 'nested-snake-key': [{ 'nested-key': 'value' }] }],
  ],
];
