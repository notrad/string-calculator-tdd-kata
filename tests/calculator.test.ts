import { calculate } from '../src/calculator';


describe('String calculator TDD kata', () => {
  test('input "" should return 0', () => {
    expect(calculate("")).toBe(0);
  });
});

