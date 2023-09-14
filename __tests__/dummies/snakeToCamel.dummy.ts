export const validSnakeDummy = { snake_key: 'value' };
export const validSnakeDummies: [string, unknown, unknown][] = [
  ['flat object', { snake_key: 'value' }, { snakeKey: 'value' }],
  [
    'nested object',
    { snake_key: 'value', nested_snake_key: { nested_key: 'value' } },
    { snakeKey: 'value', nestedSnakeKey: { nestedKey: 'value' } },
  ],
  ['array with flat objects', [{ snake_key: 'value' }], [{ snakeKey: 'value' }]],
  [
    'array with nested object',
    [{ snake_key: 'value', nested_snake_key: [{ nested_key: 'value' }] }],
    [{ snakeKey: 'value', nestedSnakeKey: [{ nestedKey: 'value' }] }],
  ],
];
