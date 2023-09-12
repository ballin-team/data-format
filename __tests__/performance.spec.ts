import { toCamel } from '../src';
import { objNested } from './dummies';

describe('Performance use case', () => {
  it('time to execute', () => {
    const startTime = performance.now();
    const data = toCamel(objNested)
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(1);
  });
});
