export const validSnaketoFlatDummy = { snake_key: 'value' };
export const validSnakeToFlatDummies: [string, unknown, unknown][] = [
  ['flat object', { snake_key: 'value' }, { snakekey: 'value' }],
  [
    'nested object',
    { snake_key: 'value', nested_snake_key: { nested_key: 'value' } },
    { snakekey: 'value', nestedsnakekey: { nestedkey: 'value' } },
  ],
  ['array with flat objects', [{ snake_key: 'value' }], [{ snakekey: 'value' }]],
  [
    'array with nested object',
    [{ snake_key: 'value', nested_snake_key: [{ nested_key: 'value' }] }],
    [{ snakekey: 'value', nestedsnakekey: [{ nestedkey: 'value' }] }],
  ],
];
